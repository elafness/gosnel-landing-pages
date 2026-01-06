// Cloudflare Pages Function to handle subdomain routing
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // Get the hostname (e.g., partner.gosnel.com, gosnel.com)
  const hostname = url.hostname;
  
  // Route based on hostname
  if (hostname === 'partner.gosnel.com') {
    // Serve partner content
    return handlePartnerDomain(url, context);
  } else if (hostname === 'gosnel.com' || hostname === 'www.gosnel.com') {
    // Serve user content
    return handleMainDomain(url, context);
  }
  
  // Default fallback
  return handleMainDomain(url, context);
}

async function handlePartnerDomain(url, context) {
  const path = url.pathname;
  
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
    // Fetch the partner content
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

async function handleMainDomain(url, context) {
  // Let the normal _redirects and static files handle main domain
  return context.env.ASSETS.fetch(context.request);
}
