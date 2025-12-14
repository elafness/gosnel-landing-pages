#!/bin/bash

echo "🔧 Fixing dark mode colors in all pages..."

# Define the directories to fix
DIRS=("src/user" "src/vendor")

for dir in "${DIRS[@]}"; do
    echo "📂 Processing $dir..."
    
    for file in "$dir"/*.html; do
        if [ -f "$file" ]; then
            echo "   ✅ Fixing $(basename "$file")"
            
            # Fix background colors
            sed -i '' 's/bg-gray-50/bg-white/g' "$file"
            sed -i '' 's/bg-gray-800\/50/bg-teal-50/g' "$file"
            
            # Fix heading colors
            sed -i '' 's/text-teal-400/text-teal-600/g' "$file"
            sed -i '' 's/text-teal-300/text-teal-600/g' "$file"
            
            # Fix text colors
            sed -i '' 's/text-gray-800/text-gray-900/g' "$file"
            sed -i '' 's/text-gray-700/text-gray-800/g' "$file"
            
            # Fix link colors
            sed -i '' 's/hover:text-teal-300/hover:text-teal-700/g' "$file"
            sed -i '' 's/hover:text-teal-400/hover:text-teal-700/g' "$file"
            
            # Fix border colors for light backgrounds
            sed -i '' 's/border-teal-500/border-teal-600/g' "$file"
            
        fi
    done
done

echo "🎉 All pages fixed for light mode!"
