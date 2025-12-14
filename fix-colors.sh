#!/bin/bash

# GoSnel Light Mode Color Fix Script
# This script fixes all color issues across vendor and user pages

echo "🎨 Starting GoSnel Light Mode Color Fix..."

# Function to fix colors in a file
fix_colors_in_file() {
    local file="$1"
    echo "  Fixing colors in: $file"
    
    # Fix body background and text colors
    sed -i '' 's/class="bg-white text-gray-900 min-h-screen"/class="bg-white text-black min-h-screen"/g' "$file"
    
    # Fix gradient text to solid black for headings
    sed -i '' 's/class="text-gradient[^"]*"/class="text-black"/g' "$file"
    sed -i '' 's/class="text-gradient-teal"/class="text-black"/g' "$file"
    
    # Fix gray text colors to black
    sed -i '' 's/text-gray-100/text-black/g' "$file"
    sed -i '' 's/text-gray-200/text-black/g' "$file"
    sed -i '' 's/text-gray-300/text-gray-800/g' "$file"
    sed -i '' 's/text-gray-400/text-gray-700/g' "$file"
    sed -i '' 's/text-gray-500/text-gray-800/g' "$file"
    sed -i '' 's/text-white/text-black/g' "$file"
    
    # Fix background colors to solid white
    sed -i '' 's/bg-white\/90/bg-white/g' "$file"
    sed -i '' 's/bg-white\/95/bg-white/g' "$file"
    sed -i '' 's/bg-\[#ffffff\]/bg-white/g' "$file"
    
    # Fix card backgrounds
    sed -i '' 's/bg-white\/5/bg-gray-50/g' "$file"
    sed -i '' 's/bg-white\/10/bg-gray-100/g' "$file"
    
    # Fix border colors
    sed -i '' 's/border-white\/10/border-gray-200/g' "$file"
    sed -i '' 's/border-white\/20/border-gray-300/g' "$file"
    
    echo "    ✅ Fixed colors in $file"
}

# Fix colors in all vendor pages
echo "📁 Fixing vendor pages..."
for file in src/vendor/*.html; do
    if [[ -f "$file" ]]; then
        fix_colors_in_file "$file"
    fi
done

# Fix colors in all user pages
echo "📁 Fixing user pages..."
for file in src/user/*.html; do
    if [[ -f "$file" ]]; then
        fix_colors_in_file "$file"
    fi
done

echo "🎨 Color fixes complete!"
echo "🔨 Now rebuilding project..."

# Rebuild the project
node build.js

echo "✅ All done! GoSnel pages now have proper light mode colors."
