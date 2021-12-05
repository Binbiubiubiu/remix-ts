import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import Access from "~/components/Access";

export interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export default function Document({ children, title }: DocumentProps) {
  return (
    <html lang="zh-Hans">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
        <Access require={!!title} accessible={<title>{title}</title>} />
        <Meta />
        <Links />
      </head>
      {/* hack: 解决激活效果无效 */}
      <body onTouchStart={() => void 0}>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Access
          require={process.env.NODE_ENV === "development"}
          accessible={<LiveReload />}
        />
      </body>
    </html>
  );
}
