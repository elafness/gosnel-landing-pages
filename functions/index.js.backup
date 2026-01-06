// Main domain landing page handler
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    // Only handle root domain requests
    if (url.pathname === '/' || url.pathname === '') {
        try {
            // Serve the main marketing landing page
            const response = await fetch(`${url.origin}/index.html`);
            
            if (!response.ok) {
                return new Response('Page not found', { status: 404 });
            }
            
            const html = await response.text();
            
            return new Response(html, {
                headers: {
                    'content-type': 'text/html; charset=utf-8',
                    'cache-control': 'public, max-age=300',
                }
            });
            
        } catch (error) {
            console.error('Main page error:', error);
            return new Response('Internal Server Error', { status: 500 });
        }
    }
    
    // Pass through to other handlers
    return new Response('Not Found', { status: 404 });
}
