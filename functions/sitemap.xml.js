// Sitemap Function - serves the correct sitemap based on subdomain
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const hostname = url.hostname;
    
    // Determine which sitemap to serve based on hostname
    let sitemapFile;
    if (hostname.includes('vendor')) {
        sitemapFile = '/vendor-sitemap.xml';
    } else if (hostname.includes('user')) {
        sitemapFile = '/user-sitemap.xml';
    } else if (hostname.includes('drivers')) {
        sitemapFile = '/drivers-sitemap.xml';
    } else if (hostname.includes('promo')) {
        sitemapFile = '/promo-sitemap.xml';
    } else {
        // Default to user sitemap for unknown domains
        sitemapFile = '/user-sitemap.xml';
    }
    
    try {
        // Fetch the correct sitemap file
        const sitemapResponse = await fetch(`${url.origin}${sitemapFile}`);
        
        if (!sitemapResponse.ok) {
            return new Response('Sitemap not found', { 
                status: 404,
                headers: { 'content-type': 'text/plain' }
            });
        }
        
        const xml = await sitemapResponse.text();
        
        // Return the XML with proper headers
        return new Response(xml, {
            headers: {
                'content-type': 'application/xml; charset=utf-8',
                'cache-control': 'public, max-age=3600', // 1 hour cache
                'x-robots-tag': 'noindex'
            }
        });
        
    } catch (error) {
        console.error('Sitemap function error:', error);
        return new Response('Internal Server Error', { 
            status: 500,
            headers: { 'content-type': 'text/plain' }
        });
    }
}
