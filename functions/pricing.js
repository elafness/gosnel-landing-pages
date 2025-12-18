// Cloudflare Pages Function - BULLETPROOF solution for /pricing
// This bypasses all redirect complexity and serves the pricing page directly

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    
    // Only handle /pricing requests
    if (url.pathname !== '/pricing') {
        return new Response('Not Found', { status: 404 });
    }
    
    try {
        // Fetch the actual pricing HTML from the built file
        const pricingResponse = await fetch(`${url.origin}/vendor/vendor-pricing`);
        
        if (!pricingResponse.ok) {
            // Fallback: try the .html version
            const fallbackResponse = await fetch(`${url.origin}/vendor-pricing.html`);
            if (!fallbackResponse.ok) {
                return new Response('Pricing page not found', { status: 404 });
            }
            const html = await fallbackResponse.text();
            return new Response(html, {
                headers: {
                    'content-type': 'text/html; charset=utf-8',
                    'cache-control': 'public, max-age=300', // 5 minute cache
                }
            });
        }
        
        const html = await pricingResponse.text();
        
        // Return the pricing HTML with proper headers
        return new Response(html, {
            headers: {
                'content-type': 'text/html; charset=utf-8',
                'cache-control': 'public, max-age=300', // 5 minute cache
            }
        });
        
    } catch (error) {
        console.error('Pricing function error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
