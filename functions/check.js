export async function onRequestGet(context) {
  const url = new URL(context.request.url);

  return new Response(
    JSON.stringify(
      {
        ok: true,
        service: "Avenlo",
        path: url.pathname,
        query: Object.fromEntries(url.searchParams),
        timestamp: new Date().toISOString()
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "cache-control": "no-store"
      }
    }
  );
}
