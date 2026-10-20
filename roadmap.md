# Search URL corrections
- [x] Use the requested domain in the existing sitemap and page URL tags.
- [x] Add the sitemap address to robots.txt.
- [x] Verify the served sitemap and page addresses with regression tests.

# Turnstile form protection
- [x] Configure the supplied public site key and securely store the private key.
- [x] Require server verification on contact and assessment forms, including failure and expiry handling.
- [x] Test verification rules and check both forms in the browser (seven tests passed; missing challenges blocked).
- [ ] Verify a real successful challenge after publishing on a Cloudflare-approved hostname; local browser challenge reports unable to connect.