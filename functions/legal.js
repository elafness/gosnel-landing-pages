// Legal page function - serves the unified legal page directly
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    try {
        // Serve the unified legal HTML directly
        const response = await fetch(`${url.origin}/legal.html`);
        
        if (!response.ok) {
            return new Response('Legal page not found', { status: 404 });
        }
        
        const html = await response.text();
        
        return new Response(html, {
            headers: {
                'content-type': 'text/html; charset=utf-8',
                'cache-control': 'public, max-age=300',
            }
        });
        
    } catch (error) {
        console.error('Legal function error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
