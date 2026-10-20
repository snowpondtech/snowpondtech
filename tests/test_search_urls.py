"""Regression checks against the running site's public search URL outputs."""

import unittest
from html.parser import HTMLParser
from urllib.request import urlopen
from xml.etree import ElementTree


class SearchAddresses(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals = []
        self.og_urls = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if tag == "link" and values.get("rel") == "canonical":
            self.canonicals.append(values.get("href"))
        if tag == "meta" and values.get("property") == "og:url":
            self.og_urls.append(values.get("content"))


def read(path):
    with urlopen("http://localhost:8080" + path, timeout=30) as response:
        return response.read().decode()


class SearchURLTests(unittest.TestCase):
    def sitemap_urls(self):
        root = ElementTree.fromstring(read("/sitemap.xml"))
        return [node.text for node in root.findall("{*}url/{*}loc")]

    def test_sitemap_uses_requested_domain(self):
        urls = self.sitemap_urls()
        self.assertIn("https://snowpondtech.com/", urls)
        self.assertIn("https://snowpondtech.com/about", urls)
        for url in urls:
            self.assertTrue(url.startswith("https://snowpondtech.com/"), url)

    def test_robots_declares_requested_sitemap(self):
        directives = read("/robots.txt").splitlines()
        self.assertIn("Sitemap: https://snowpondtech.com/sitemap.xml", directives)

    def test_canonical_urls_self_reference_requested_domain(self):
        for url in sorted(set(self.sitemap_urls())):
            with self.subTest(url=url):
                addresses = SearchAddresses()
                addresses.feed(read(url.removeprefix("https://snowpondtech.com")))
                self.assertEqual(addresses.canonicals, [url])

    def test_open_graph_urls_self_reference_requested_domain(self):
        for url in sorted(set(self.sitemap_urls())):
            with self.subTest(url=url):
                addresses = SearchAddresses()
                addresses.feed(read(url.removeprefix("https://snowpondtech.com")))
                self.assertEqual(addresses.og_urls, [url])


if __name__ == "__main__":
    unittest.main()