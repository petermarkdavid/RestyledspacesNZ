import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { SiteFooter } from "#/components/SiteFooter";
import { SiteHeader } from "#/components/SiteHeader";
import { publicAsset } from "#/lib/baseUrl";
import { site } from "#/lib/site";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.name },
      { name: "description", content: site.description },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
      },
      { rel: "icon", href: publicAsset("/images/not-portfolio/translogofinal.png"), type: "image/png" },
      { rel: "icon", href: publicAsset("/favicon.ico"), sizes: "any" },
      { rel: "canonical", href: site.url },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className="h-full scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-full flex-col bg-page text-ink antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SiteHeader />
        <main className="flex-1 pt-20">{children}</main>
        <SiteFooter />
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  );
}
