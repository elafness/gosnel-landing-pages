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
    // تم تصليح السطر التالي (Regex) ليعمل بشكل صحيح
    const includeRegex = //g;
    return htmlContent.replace(includeRegex, (match, filePath) => {
      // Try multiple possible paths for includes
      const possiblePaths = [
        path.join(basePath, filePath),
        path.join(__dirname, filePath),
        path.join(__dirname, "src", "partner-app", filePath),
        path.join(__dirname, "src", "user-app", filePath),
        path.join(__dirname, "src", filePath),
        path.join(__dirname, "shared", filePath),
        path.join(srcDir, filePath)
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
    const srcPath = path.join(__dirname, filename);
    const distPath = path.join(distDir, `index-${subdomain}.html`);

    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);
      htmlContent = htmlContent.replace(/\.\.\/\.\.\/dist\/output\.css/g, "../output.css");
      fs.writeFileSync(distPath, htmlContent);
      console.log(`✅ Built ${subdomain}.gosnel.com`);
      
      const rootIndexPath = path.join(distDir, `index-${subdomain}.html`);
      let rootHtmlContent = fs.readFileSync(srcPath, "utf8");
      rootHtmlContent = processIncludes(rootHtmlContent, path.dirname(srcPath));
      rootHtmlContent = rootHtmlContent.replace(/\.\.\/\.\.\/dist\/output\.css/g, "/output.css");
      fs.writeFileSync(rootIndexPath, rootHtmlContent);
    }
  });

  landingPages.forEach(({ subdomain, filename }) => {
    const distSubdomainDir = path.join(distDir, subdomain);
    const distIndexPath = path.join(distSubdomainDir, 'index.html');
    const fullSrcPath = path.join(__dirname, filename);

    if (fs.existsSync(fullSrcPath)) {
      if (!fs.existsSync(distSubdomainDir)) {
        fs.mkdirSync(distSubdomainDir, { recursive: true });
      }
      let htmlContent = fs.readFileSync(fullSrcPath, "utf8");
      htmlContent = processIncludes(htmlContent, path.dirname(fullSrcPath));
      htmlContent = htmlContent.replace(/\.\.\/\.\.\/dist\/output\.css/g, "/output.css");
      fs.writeFileSync(distIndexPath, htmlContent);
      console.log(`✅ Created ${subdomain}/index.html`);
    }
  });

  const filesToCopy = ["index.html", "robots.txt", "sitemap.xml", "_redirects", "_routes.json", "_headers"];
  filesToCopy.forEach(file => {
    const sPath = path.join(srcDir, file);
    const dPath = path.join(distDir, file);
    if (fs.existsSync(sPath)) {
      fs.copyFileSync(sPath, dPath);
      console.log(`✅ Copied ${file}`);
    }
  });

  const subdomains = ['user', 'vendor', 'drivers', 'promo', 'footer', 'careers', 'restaurants'];
  subdomains.forEach(subdomain => {
    const srcSubdomainDir = path.join(srcDir, subdomain);
    const distSubdomainDir = path.join(distDir, subdomain);

    if (fs.existsSync(srcSubdomainDir)) {
      const copyDir = (src, dest) => {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
          const sPath = path.join(src, entry.name);
          const dPath = path.join(dest, entry.name);
          if (entry.name.includes('-landing.html')) return;
          if (entry.isDirectory()) {
            copyDir(sPath, dPath);
          } else if (entry.name.endsWith('.html')) {
            let content = fs.readFileSync(sPath, "utf8");
            content = processIncludes(content, path.dirname(sPath));
            content = content.replace(/\.\.\/\.\.\/dist\/output\.css/g, "/output.css");
            fs.writeFileSync(dPath, content);
          } else {
            fs.copyFileSync(sPath, dPath);
          }
        });
      };
      copyDir(srcSubdomainDir, distSubdomainDir);
    }
  });

  const sharedSourcePath = path.join(__dirname, "shared");
  const sharedDestPath = path.join(distDir, "shared");
  if (fs.existsSync(sharedSourcePath)) {
    if (fs.existsSync(sharedDestPath)) fs.rmSync(sharedDestPath, { recursive: true, force: true });
    fs.cpSync(sharedSourcePath, sharedDestPath, { recursive: true });
    console.log("✅ Copied shared directory");
  }

  console.log("🎉 Build complete!");
};

buildPages();