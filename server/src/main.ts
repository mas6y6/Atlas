const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  fetch(req) {
    const { pathname } = new URL(req.url);

    if (pathname === '/api/health') {
      return Response.json({ status: 'ok' })
    }

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Server running at ${server.url}`)
