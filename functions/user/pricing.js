export async function onRequestGet(context) {
  try {
    // Fetch the user pricing page content
    const response = await fetch(new URL('/user/user-pricing', context.request.url));
    const html = await response.text();
    
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response('Page not found', { status: 404 });
  }
}
