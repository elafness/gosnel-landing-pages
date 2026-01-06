// Cloudflare Pages Function - Handle UAE routing only
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Only handle /uae/ routes - let root pages be served directly
    if (path.startsWith('/uae/')) {
        const segments = path.split('/').filter(Boolean); // ['uae', 'user', 'pricing']
        
        if (segments.length >= 2) {
            const section = segments[1]; // 'user', 'vendor', 'driver'
            const page = segments[2] || ''; // 'pricing', 'faq', etc. or empty for landing page
            
            try {
                let targetPath;
                
                switch (section) {
                    case 'user':
                        if (!page) {
                            targetPath = '/user/user-landing.html';
                        } else if (page === 'pricing') {
                            targetPath = '/user/user-pricing.html';
                        } else if (page === 'how-it-works') {
                            targetPath = '/user/user-how-it-works.html';
                        } else {
                            return new Response('Page not found', { status: 404 });
                        }
                        break;
                        
                    case 'vendor':
                        if (!page) {
                            targetPath = '/vendor/vendor-landing.html';
                        } else if (page === 'pricing') {
                            targetPath = '/vendor/vendor-pricing.html';
                        } else if (page === 'how-it-works') {
                            targetPath = '/vendor/vendor-how-it-works.html';
                        } else if (page === 'why-partner') {
                            targetPath = '/vendor/vendor-why-partner.html';
                        } else if (page === 'customer-lead') {
                            targetPath = '/vendor/vendor-customerLead.html';
                        } else if (page === 'guidelines') {
                            targetPath = '/vendor/vendor-guidelines.html';
                        } else if (page === 'insights') {
                            targetPath = '/vendor/vendor-insights.html';
                        } else {
                            return new Response('Page not found', { status: 404 });
                        }
                        break;
                        
                    case 'driver':
                        if (!page) {
                            targetPath = '/drivers/drivers-landing.html';
                        } else {
                            return new Response('Page not found', { status: 404 });
                        }
                        break;
                        
                    default:
                        return new Response('Section not found', { status: 404 });
                }
                
                // Fetch the target page
                const targetResponse = await fetch(`${url.origin}${targetPath}`);
                
                if (!targetResponse.ok) {
                    return new Response('Page not found', { status: 404 });
                }
                
                const html = await targetResponse.text();
                
                return new Response(html, {
                    headers: {
                        'content-type': 'text/html; charset=utf-8',
                        'cache-control': 'public, max-age=300',
                    }
                });
                
            } catch (error) {
                console.error('UAE routing error:', error);
                return new Response('Internal Server Error', { status: 500 });
            }
        }
    }
    
    // If no UAE route matched, return 404 (let other routes be handled normally)
    return new Response('Not Found', { status: 404 });
}