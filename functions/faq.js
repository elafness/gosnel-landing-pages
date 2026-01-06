// FAQ page function - serves the unified FAQ directly
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    try {
        // Serve the unified FAQ HTML directly
        const response = await fetch(`${url.origin}/faq.html`);
        
        if (!response.ok) {
            return new Response('FAQ page not found', { status: 404 });
        }
        
        const html = await response.text();
        
        return new Response(html, {
            headers: {
                'content-type': 'text/html; charset=utf-8',
                'cache-control': 'public, max-age=300',
            }
        });
        
    } catch (error) {
        console.error('FAQ function error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
