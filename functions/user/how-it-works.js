export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  console.log('User how-it-works function triggered for:', hostname, pathname);

  // Only handle user subdomain requests
  if (!hostname.includes('user.gosnel.com')) {
    return new Response('Not Found', { status: 404 });
  }

  try {
    // Fetch the user how-it-works file directly
    const targetUrl = new URL('/user/user-how-it-works', request.url);

    console.log('Fetching user how-it-works from:', targetUrl.toString());

    // Fetch the file content
    const response = await fetch(targetUrl.toString(), {
      method: request.method,
      headers: request.headers
    });

    if (response.ok) {
      // Return the content with proper headers
      return new Response(response.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'X-Served-By': 'user-how-it-works-function'
        }
      });
    }

    return new Response('File not found', { status: 404 });
  } catch (error) {
    console.error('Error fetching user how-it-works:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
