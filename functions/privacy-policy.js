// Privacy Policy page function - serves the legal page
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    try {
        // Serve the unified legal HTML directly
        const response = await fetch(`${url.origin}/legal.html`);
        
        if (!response.ok) {
            return new Response('Privacy policy not found', { status: 404 });
        }
        
        const html = await response.text();
        
        return new Response(html, {
            headers: {
                'content-type': 'text/html; charset=utf-8',
                'cache-control': 'public, max-age=300',
            }
        });
        
    } catch (error) {
        console.error('Privacy policy function error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
