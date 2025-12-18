const fs = require("fs");
const path = require("path");

// Build script to copy HTML files and process assets
const buildPages = () => {
  const srcDir = path.join(__dirname, "src");
  const distDir = path.join(__dirname, "dist");

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Function to process HTML includes
  const processIncludes = (htmlContent) => {
    // Replace <!--#include file="path" --> with actual file content
    const includeRegex = /<!--\s*#include\s+file="([^"]+)"\s*-->/g;
    return htmlContent.replace(includeRegex, (match, filePath) => {
      const includePath = path.join(srcDir, filePath);
      if (fs.existsSync(includePath)) {
        return fs.readFileSync(includePath, "utf8");
      } else {
        console.warn(`⚠️  Include file not found: ${filePath}`);
        return `<!-- Include not found: ${filePath} -->`;
      }
    });
  };

  // Landing page files configuration
  const landingPages = [
    { subdomain: "user", filename: "user/user-landing.html" },
    { subdomain: "vendor", filename: "vendor/vendor-landing.html" },
    { subdomain: "drivers", filename: "drivers/drivers-landing.html" },
    { subdomain: "promo", filename: "promo/promo-landing.html" }
  ];

  landingPages.forEach(({ subdomain, filename }) => {
    const srcPath = path.join(srcDir, filename);
    // Build landing pages at root level with subdomain-specific names
    const distPath = path.join(distDir, `index-${subdomain}.html`);

    // Copy HTML file if it exists
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");

      // Process includes first
      htmlContent = processIncludes(htmlContent);

      // Replace CSS path to point to the compiled Tailwind CSS
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "../output.css"
      );

      fs.writeFileSync(distPath, htmlContent);
      console.log(`✅ Built ${subdomain}.gosnel.com`);
      
      // Also copy to root level as index-{subdomain}.html for redirects
      const rootIndexPath = path.join(distDir, `index-${subdomain}.html`);
      // For root level, CSS path needs to be /output.css
      let rootHtmlContent = fs.readFileSync(srcPath, "utf8");
      
      // Process includes for root version too
      rootHtmlContent = processIncludes(rootHtmlContent);
      rootHtmlContent = rootHtmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      rootHtmlContent = rootHtmlContent.replace(
        /href="\/output\.css"/g,
        'href="/output.css"'
      );
      fs.writeFileSync(rootIndexPath, rootHtmlContent);
    } else {
      console.log(`⚠️  No index.html found for ${subdomain}`);
    }
  });

  // Create index.html files in subdirectories that redirect to the main landing pages
  landingPages.forEach(({ subdomain, filename }) => {
    const srcPath = path.join(srcDir, filename);
    const distSubdomainDir = path.join(distDir, subdomain);
    const distIndexPath = path.join(distSubdomainDir, 'index.html');

    if (fs.existsSync(srcPath)) {
      // Ensure subdomain directory exists
      if (!fs.existsSync(distSubdomainDir)) {
        fs.mkdirSync(distSubdomainDir, { recursive: true });
      }

      // Copy landing page content as index.html in subdirectory
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      
      // Fix CSS paths for subdirectory access
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      htmlContent = htmlContent.replace(
        /href="\/output\.css"/g,
        'href="/output.css"'
      );
      
      fs.writeFileSync(distIndexPath, htmlContent);
      console.log(`✅ Created ${subdomain}/index.html`);
    }
  });

  // Copy root index.html for routing
  const rootIndexPath = path.join(srcDir, "index.html");
  const distRootIndexPath = path.join(distDir, "index.html");

  if (fs.existsSync(rootIndexPath)) {
    fs.copyFileSync(rootIndexPath, distRootIndexPath);
    console.log("✅ Copied root index.html for routing");
  }

  // Copy robots.txt if it exists
  const robotsPath = path.join(srcDir, "robots.txt");
  const distRobotsPath = path.join(distDir, "robots.txt");

  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, distRobotsPath);
    console.log("✅ Copied robots.txt");
  }

  // Copy sitemap.xml if it exists
  const sitemapPath = path.join(srcDir, "sitemap.xml");
  const distSitemapPath = path.join(distDir, "sitemap.xml");

  if (fs.existsSync(sitemapPath)) {
    fs.copyFileSync(sitemapPath, distSitemapPath);
    console.log("✅ Copied sitemap.xml");
  }

    // Copy subdirectory static pages (user, vendor, footer, etc.) with include processing
  const subdomains = ['user', 'vendor', 'drivers', 'promo', 'footer'];
  
  subdomains.forEach(subdomain => {
    const srcSubdomainDir = path.join(srcDir, subdomain);
    const distSubdomainDir = path.join(distDir, subdomain);

    if (fs.existsSync(srcSubdomainDir)) {
      // Recursive copy function with HTML processing
      const copyDirectoryRecursive = (src, dest) => {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        const entries = fs.readdirSync(src, { withFileTypes: true });
        entries.forEach((entry) => {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          // Skip landing page files since they're handled separately
          if (entry.name.includes('-landing.html')) {
            return;
          }
          
          if (entry.isDirectory()) {
            copyDirectoryRecursive(srcPath, destPath);
          } else if (entry.name.endsWith('.html')) {
            // Process HTML files with includes
            let htmlContent = fs.readFileSync(srcPath, "utf8");
            htmlContent = processIncludes(htmlContent);
            fs.writeFileSync(destPath, htmlContent);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      };

      copyDirectoryRecursive(srcSubdomainDir, distSubdomainDir);
    }
  });
  
  console.log("✅ Copied subdirectory pages");

  // Create root-level vendor static pages with vendor- prefix ONLY
  const vendorPages = ['vendor-how-it-works', 'vendor-why-partner', 'vendor-guidelines', 'vendor-insights', 'vendor-faq', 'vendor-pricing'];
  vendorPages.forEach(pageName => {
    const srcPath = path.join(srcDir, 'vendor', `${pageName}.html`);
    const distPath = path.join(distDir, `${pageName}.html`);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      fs.writeFileSync(distPath, htmlContent);
    }
  });

  // Create root-level user static pages with user- prefix ONLY
  const userPages = ['user-pricing', 'user-faq', 'user-how-it-works'];
  userPages.forEach(pageName => {
    const srcPath = path.join(srcDir, 'user', `${pageName}.html`);
    const distPath = path.join(distDir, `${pageName}.html`);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      fs.writeFileSync(distPath, htmlContent);
    }
  });

  // Create root-level footer pages (universal pages)
  const footerPages = ['about-us', 'legal'];
  footerPages.forEach(pageName => {
    const srcPath = path.join(srcDir, 'footer', `${pageName}.html`);
    const distPath = path.join(distDir, `${pageName}.html`);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      fs.writeFileSync(distPath, htmlContent);
    }
  });
  
  console.log("✅ Created prefixed subdomain pages");

  // Copy assets if they exist (recursively)
  const assetsDir = path.join(srcDir, "assets");
  const distAssetsDir = path.join(distDir, "assets");

  if (fs.existsSync(assetsDir)) {
    // Recursive copy function
    const copyDirectoryRecursive = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
          copyDirectoryRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    copyDirectoryRecursive(assetsDir, distAssetsDir);
    console.log("✅ Copied assets");
  }

  // Copy _redirects file for Cloudflare Pages routing
  const redirectsPath = path.join(srcDir, "_redirects");
  const distRedirectsPath = path.join(distDir, "_redirects");

  if (fs.existsSync(redirectsPath)) {
    fs.copyFileSync(redirectsPath, distRedirectsPath);
    console.log("✅ Copied _redirects file");
  }

  // Copy _routes.json file for Cloudflare Pages Functions routing
  const routesPath = path.join(srcDir, "_routes.json");
  const distRoutesPath = path.join(distDir, "_routes.json");

  if (fs.existsSync(routesPath)) {
    fs.copyFileSync(routesPath, distRoutesPath);
    console.log("✅ Copied _routes.json file");
  }

  // Create localhost development files for 404-free routing
  const localhostFiles = [
    { src: "user-how-it-works.html", dest: "how-it-works.html" },
    { src: "user-faq.html", dest: "faq.html" },
    { src: "user-pricing.html", dest: "pricing.html" },
    { src: "vendor-why-partner.html", dest: "why-partner.html" },
    { src: "vendor-guidelines.html", dest: "guidelines.html" },
    { src: "vendor-insights.html", dest: "insights.html" }
  ];

  localhostFiles.forEach(({ src, dest }) => {
    const srcPath = path.join(distDir, src);
    const destPath = path.join(distDir, dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
  console.log("✅ Created localhost development files");

  console.log("🎉 Build complete!");
};

buildPages();
