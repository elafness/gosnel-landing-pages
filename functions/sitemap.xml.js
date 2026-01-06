// Sitemap Function - serves the correct sitemap based on path or subdomain (for transition period)
export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const hostname = url.hostname;
    const pathname = url.pathname;
    
    // Determine which sitemap to serve based on path or hostname
    let sitemapFile;
    
    // Check if it's a new UAE path request
    if (pathname.includes('/uae/user/sitemap.xml')) {
        sitemapFile = '/user-sitemap.xml';
    } else if (pathname.includes('/uae/vendor/sitemap.xml')) {
        sitemapFile = '/vendor-sitemap.xml';
    } else if (pathname.includes('/uae/driver/sitemap.xml')) {
        sitemapFile = '/drivers-sitemap.xml';
    } else if (pathname.includes('/uae/promo/sitemap.xml')) {
        sitemapFile = '/promo-sitemap.xml';
    }
    // Legacy subdomain support (for transition period)
    else if (hostname.includes('vendor')) {
        sitemapFile = '/vendor-sitemap.xml';
    } else if (hostname.includes('user')) {
        sitemapFile = '/user-sitemap.xml';
    } else if (hostname.includes('drivers')) {
        sitemapFile = '/drivers-sitemap.xml';
    } else if (hostname.includes('promo')) {
        sitemapFile = '/promo-sitemap.xml';
    } else {
        // Default to user sitemap for main domain
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
        
        let xml = await sitemapResponse.text();
        
        // Update URLs in sitemap to reflect new structure if serving on main domain
        if (hostname === 'gosnel.com' || hostname === 'www.gosnel.com') {
            if (sitemapFile === '/user-sitemap.xml') {
                xml = xml.replace(/https?:\/\/user\.gosnel\.com/g, 'https://gosnel.com/uae/user');
            } else if (sitemapFile === '/vendor-sitemap.xml') {
                xml = xml.replace(/https?:\/\/vendor\.gosnel\.com/g, 'https://gosnel.com/uae/vendor');
            } else if (sitemapFile === '/drivers-sitemap.xml') {
                xml = xml.replace(/https?:\/\/drivers\.gosnel\.com/g, 'https://gosnel.com/uae/driver');
            } else if (sitemapFile === '/promo-sitemap.xml') {
                xml = xml.replace(/https?:\/\/promo\.gosnel\.com/g, 'https://gosnel.com/uae/promo');
            }
        }
        
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
