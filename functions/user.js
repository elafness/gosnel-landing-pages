export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  console.log('User function triggered for:', hostname, pathname);

  // Only handle user subdomain requests for specific /user/* paths
  if (!hostname.includes('user.gosnel.com') || !pathname.startsWith('/user/')) {
    return new Response(null, { status: 404 });
  }

  // Define the routing mappings
  const userRoutes = {
    '/user/pricing': '/user/user-pricing',
    '/user/how-it-works': '/user/user-how-it-works', 
    '/user/faq': '/user/user-faq'
  };

  // Check if this path should be handled
  if (userRoutes[pathname]) {
    try {
      // Construct the internal URL for the file
      const targetPath = userRoutes[pathname];
      const targetUrl = new URL(targetPath, request.url);

      console.log('Fetching internal path:', targetUrl.toString());

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
            'X-Served-By': 'user-pages-function'
          }
        });
      }
    } catch (error) {
      console.error('Error fetching user page:', error);
    }
  }

  // For other /user/* paths, return 404
  return new Response('Page not found', { status: 404 });
}
