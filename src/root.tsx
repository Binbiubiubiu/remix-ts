import { Outlet, useCatch } from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import Document from "~/layouts/Document";
import resetStyleHref from "~/styles/reset.css";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.png", type: "image/png" },
    { rel: "stylesheet", href: resetStyleHref },
  ];
};

export const meta: MetaFunction = () => {
  return {
    description: ``,
    keywords: ``,
  };
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </Document>
  );
}
