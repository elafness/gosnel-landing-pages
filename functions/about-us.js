// About Us page function - serves the about page
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    try {
        // Serve the unified about HTML directly
        const response = await fetch(`${url.origin}/about.html`);
        
        if (!response.ok) {
            return new Response('About us page not found', { status: 404 });
        }
        
        const html = await response.text();
        
        return new Response(html, {
            headers: {
                'content-type': 'text/html; charset=utf-8',
                'cache-control': 'public, max-age=300',
            }
        });
        
    } catch (error) {
        console.error('About us function error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
