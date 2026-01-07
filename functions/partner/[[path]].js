// Cloudflare Pages Function specifically for partner.gosnel.com subdomain routing
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Skip function for static assets
  if (path.startsWith('/shared/') || 
      path.startsWith('/assets/') || 
      path === '/sitemap.xml' || 
      path === '/robots.txt' ||
      path.endsWith('.xml') ||
      path.endsWith('.txt') ||
      path.endsWith('.css') || 
      path.endsWith('.js') || 
      path.endsWith('.png') || 
      path.endsWith('.jpg') || 
      path.endsWith('.ico') || 
      path.endsWith('.svg') || 
      path.endsWith('.webp') ||
      path.endsWith('.webmanifest') ||
      path.endsWith('.json')) {
    return context.next();
  }
  
  // Map partner paths to partner files
  const partnerRoutes = {
    '/': '/partner-landing.html',
    '/pricing': '/partner-pricing.html',
    '/how-it-works': '/partner-how-it-works.html',
    '/why-partner': '/partner-why-partner.html',
    '/guidelines': '/partner-guidelines.html',
    '/insights': '/partner-insights.html'
  };
  
  const targetFile = partnerRoutes[path];
  
  if (targetFile) {
    const response = await context.env.ASSETS.fetch(new Request(`${url.origin}${targetFile}`));
    if (response.ok) {
      return new Response(response.body, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=300',
        }
      });
    }
  }
  
  // Fallback to partner landing
  const fallbackResponse = await context.env.ASSETS.fetch(new Request(`${url.origin}/partner-landing.html`));
  return new Response(fallbackResponse.body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=300',
    }
  });
}
