import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-deep"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-deep"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Snow Pond Technology Group Inc." },
      { name: "theme-color", content: "#1a3a6b" },
      { property: "og:site_name", content: "Snow Pond Technology Group" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Snow Pond Technology Group | IT for Maine Contractors & Manufacturers" },
      { property: "og:title", content: "Snow Pond Technology Group | IT for Maine Contractors & Manufacturers" },
      { name: "twitter:title", content: "Snow Pond Technology Group | IT for Maine Contractors & Manufacturers" },
      { name: "description", content: "Snow Pond Technology Group helps HVAC, electrical, landscaping, and manufacturing businesses across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support growing teams." },
      { property: "og:description", content: "Snow Pond Technology Group helps HVAC, electrical, landscaping, and manufacturing businesses across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support growing teams." },
      { name: "twitter:description", content: "Snow Pond Technology Group helps HVAC, electrical, landscaping, and manufacturing businesses across Central and Southern Maine reduce downtime, strengthen cybersecurity, and support growing teams." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fee0afbf-880a-4337-9370-b81999b2b0b6" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fee0afbf-880a-4337-9370-b81999b2b0b6" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Snow Pond Technology Group",
          image: "https://snowpondtech.com/favicon.ico",
          telephone: "+1-207-692-2415",
          email: "info@snowpondtech.com",
          url: "https://snowpondtech.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Oakland",
            addressRegion: "ME",
            addressCountry: "US",
          },
          areaServed: [
            "Augusta, ME",
            "Waterville, ME",
            "Bangor, ME",
            "Lewiston, ME",
            "Auburn, ME",
            "Portland, ME",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
