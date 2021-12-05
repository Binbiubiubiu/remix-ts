import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  responseHeaders.set("Content-Type", "text/html");

  const content = <RemixServer context={remixContext} url={request.url} />;

  const markup = renderToString(content);

  const response = new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });

  return response;
}
