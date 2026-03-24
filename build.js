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
  const processIncludes = (htmlContent, basePath = srcDir) => {
    // Replace with actual file content
    const includeRegex = /<!--#include file="([^"]+)"\s*-->/g;
    return htmlContent.replace(includeRegex, (match, filePath) => {
      // Try multiple possible paths for includes
      const possiblePaths = [
        path.join(basePath, filePath), // Original path relative to base
        path.join(__dirname, filePath), // Relative to project root
        path.join(__dirname, "src", "partner-app", filePath), // In src/partner-app directory
        path.join(__dirname, "src", "user-app", filePath), // In src/user-app directory
        path.join(__dirname, "src", filePath), // In src directory
        path.join(__dirname, "shared", filePath), // In shared directory
        path.join(srcDir, filePath) // In src directory
      ];
      
      for (const includePath of possiblePaths) {
        if (fs.existsSync(includePath)) {
          return fs.readFileSync(includePath, "utf8");
        }
      }
      
      console.warn(`⚠️  Include file not found: ${filePath}`);
      return ``;
    });
  };

  // Landing page files configuration
  const landingPages = [
    { subdomain: "user", filename: "src/user-app/features/landing.html" },
    { subdomain: "drivers", filename: "src/drivers/drivers-landing.html" },
    { subdomain: "promo", filename: "src/promo/promo-landing.html" },
    { subdomain: "restaurants", filename: "src/restaurants/index.html" }
  ];

  landingPages.forEach(({ subdomain, filename }) => {
    const srcPath = path.join(__dirname, filename); // Use project root instead of srcDir
    // Build landing pages at root level with subdomain-specific names
    const distPath = path.join(distDir, `index-${subdomain}.html`);

    // Copy HTML file if it exists
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");

      // Process includes first
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);

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
      const rootFileDir = path.dirname(srcPath);
      rootHtmlContent = processIncludes(rootHtmlContent, rootFileDir);
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
      const subFileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, subFileDir);
      
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

  // Copy robots.txt if it exists (for gosnel.com)
  const robotsPath = path.join(srcDir, "robots.txt");
  const distRobotsPath = path.join(distDir, "robots.txt");

  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, distRobotsPath);
    console.log("✅ Copied robots.txt");
  }

  // Copy unified sitemap.xml (contains all URLs for both domains)
  const mainSitemapPath = path.join(srcDir, "sitemap.xml");
  const distMainSitemapPath = path.join(distDir, "sitemap.xml");

  if (fs.existsSync(mainSitemapPath)) {
    fs.copyFileSync(mainSitemapPath, distMainSitemapPath);
    console.log("✅ Copied sitemap.xml");
  }

  // Copy subdirectory static pages with include processing
  // تم إضافة careers و restaurants هنا ليتم نقل المجلدات للنسخة النهائية
  const subdomains = ['user', 'vendor', 'drivers', 'promo', 'footer', 'careers', 'restaurants'];
  
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
            
            // Fix CSS path in case the internal folder uses relative paths
            htmlContent = htmlContent.replace(
              /\.\.\/\.\.\/dist\/output\.css/g,
              "/output.css"
            );
            htmlContent = htmlContent.replace(
              /href="\.\.\/output\.css"/g,
              'href="/output.css"'
            );

            fs.writeFileSync(destPath, htmlContent);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      };

      copyDirectoryRecursive(srcSubdomainDir, distSubdomainDir);
    }
  });
  
  console.log("✅ Copied subdirectory pages (including careers & restaurants)");

  // Create /partner/ directory with partner pages (clean URLs)
  const partnerDir = path.join(distDir, 'partner');
  if (!fs.existsSync(partnerDir)) {
    fs.mkdirSync(partnerDir, { recursive: true });
  }
  
  const partnerPages = [
    { src: 'partner-app/index.html', dest: 'index.html' },
    { src: 'partner-app/features/how-it-works.html', dest: 'how-it-works.html' },
    { src: 'partner-app/features/why-partner.html', dest: 'why-partner.html' },
    { src: 'partner-app/features/guidelines.html', dest: 'guidelines.html' },
    { src: 'partner-app/features/insights.html', dest: 'insights.html' },
    { src: 'partner-app/instructions.html', dest: 'instructions.html' },
    { src: 'partner-app/pdf.html', dest: 'pdf.html' }
  ];
  
  partnerPages.forEach(({ src, dest }) => {
    const srcPath = path.join(srcDir, src);
    const distPath = path.join(partnerDir, dest);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);
      // Fix CSS paths for subdirectory
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      htmlContent = htmlContent.replace(
        /href="\.\.\/\.\.\/output\.css"/g,
        'href="/output.css"'
      );
      fs.writeFileSync(distPath, htmlContent);
      console.log(`✅ Created /partner/${dest}`);
    } else {
      console.log(`⚠️  Partner page not found: ${src}`);
    }
  });

  // Create user pages at ROOT level (for SEO - main domain content)
  const userPages = [
    { src: 'user-app/features/landing.html', dest: 'index.html' },
    { src: 'user-app/features/how-it-works.html', dest: 'how-it-works.html' },
    { src: 'user-app/food.html', dest: 'food.html' },
    { src: 'user-app/about-gosnel.html', dest: 'about.html' },
    { src: 'user-app/blog.html', dest: 'blog.html' },
    { src: 'user-app/new-faq.html', dest: 'faq.html' },
    { src: 'user-app/account-soon.html', dest: 'account-soon.html' }
  ];
  
  userPages.forEach(({ src, dest }) => {
    const srcPath = path.join(srcDir, src);
    const distPath = path.join(distDir, dest);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);
      // Fix CSS paths for root level
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      htmlContent = htmlContent.replace(
        /href="\.\.\/\.\.\/output\.css"/g,
        'href="/output.css"'
      );
      fs.writeFileSync(distPath, htmlContent);
      console.log(`✅ Created /${dest}`);
    } else {
      console.log(`⚠️  User page not found: ${src}`);
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
  
  // Copy legal.html from shared directory to dist root
  const sharedLegalPath = path.join(__dirname, 'shared', 'legal', 'legal.html');
  const distLegalPath = path.join(distDir, 'legal.html');
  
  if (fs.existsSync(sharedLegalPath)) {
    fs.copyFileSync(sharedLegalPath, distLegalPath);
    console.log("✅ Copied legal.html from shared to dist root");
  }
  
  // Copy favicon.ico to root level for Google Search Console
  const faviconSrcPath = path.join(__dirname, 'shared', 'assets', 'favicon.ico');
  const faviconDestPath = path.join(distDir, 'favicon.ico');
  
  if (fs.existsSync(faviconSrcPath)) {
    fs.copyFileSync(faviconSrcPath, faviconDestPath);
    console.log("✅ Copied favicon.ico to root for Google Search");
  }
  
  // Copy apple-touch-icon.png to root level for iOS bookmarks
  const appleTouchSrcPath = path.join(__dirname, 'shared', 'assets', 'apple-touch-icon.png');
  const appleTouchDestPath = path.join(distDir, 'apple-touch-icon.png');
  
  if (fs.existsSync(appleTouchSrcPath)) {
    fs.copyFileSync(appleTouchSrcPath, appleTouchDestPath);
    console.log("✅ Copied apple-touch-icon.png to root");
  }
  
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

  // Copy _headers file for Cloudflare Pages headers
  const headersPath = path.join(srcDir, "_headers");
  const distHeadersPath = path.join(distDir, "_headers");

  if (fs.existsSync(headersPath)) {
    fs.copyFileSync(headersPath, distHeadersPath);
    console.log("✅ Copied _headers file");
  }

  // Create localhost development files for 404-free routing
  const localhostFiles = [
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

  // Copy app directories to dist for deployment with include processing
  // Copy partner-app
  const partnerSourcePath = path.join(__dirname, "src", "partner-app");
  const partnerDestPath = path.join(distDir, "apps", "partner-app");
  
  if (fs.existsSync(partnerSourcePath)) {
    const appsDestDir = path.join(distDir, "apps");
    if (!fs.existsSync(appsDestDir)) {
      fs.mkdirSync(appsDestDir, { recursive: true });
    }
    if (fs.existsSync(partnerDestPath)) {
      fs.rmSync(partnerDestPath, { recursive: true, force: true });
    }
    
    const copyDirectoryWithIncludes = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDirectoryWithIncludes(srcPath, destPath);
        } else if (entry.name.endsWith('.html')) {
          let htmlContent = fs.readFileSync(srcPath, "utf8");
          const fileDir = path.dirname(srcPath);
          htmlContent = processIncludes(htmlContent, fileDir);
          fs.writeFileSync(destPath, htmlContent);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };
    
    copyDirectoryWithIncludes(partnerSourcePath, partnerDestPath);
    console.log("✅ Copied partner-app directory with includes processed");
  }

  // Copy user-app
  const userSourcePath = path.join(__dirname, "src", "user-app");
  const userDestPath = path.join(distDir, "apps", "user-app");
  
  if (fs.existsSync(userSourcePath)) {
    const appsDestDir = path.join(distDir, "apps");
    if (!fs.existsSync(appsDestDir)) {
      fs.mkdirSync(appsDestDir, { recursive: true });
    }
    if (fs.existsSync(userDestPath)) {
      fs.rmSync(userDestPath, { recursive: true, force: true });
    }
    
    const copyDirectoryWithIncludes = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDirectoryWithIncludes(srcPath, destPath);
        } else if (entry.name.endsWith('.html')) {
          let htmlContent = fs.readFileSync(srcPath, "utf8");
          const fileDir = path.dirname(srcPath);
          htmlContent = processIncludes(htmlContent, fileDir);
          fs.writeFileSync(destPath, htmlContent);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };
    
    copyDirectoryWithIncludes(userSourcePath, userDestPath);
    console.log("✅ Copied user-app directory with includes processed");
  }

  const sharedSourcePath = path.join(__dirname, "shared");
  const sharedDestPath = path.join(distDir, "shared");
  
  if (fs.existsSync(sharedSourcePath)) {
    if (fs.existsSync(sharedDestPath)) {
      fs.rmSync(sharedDestPath, { recursive: true, force: true });
    }
    fs.cpSync(sharedSourcePath, sharedDestPath, { recursive: true });
    console.log("✅ Copied shared directory");
  }

  console.log("🎉 Build complete!");
};

buildPages();