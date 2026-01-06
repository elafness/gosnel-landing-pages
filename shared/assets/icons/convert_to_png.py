#!/usr/bin/env python3
"""
SVG to PNG Converter for GoSnel Icons
Converts SVG icons to high-quality PNG files
"""

import subprocess
import sys
import os
from pathlib import Path

def convert_svg_to_png(svg_path, png_path, width=None, height=None):
    """Convert SVG to PNG using rsvg-convert or fallback methods"""
    
    # Try rsvg-convert first (best quality)
    try:
        cmd = ['rsvg-convert']
        if width:
            cmd.extend(['-w', str(width)])
        if height:
            cmd.extend(['-h', str(height)])
        cmd.extend(['-f', 'png', '-o', png_path, svg_path])
        
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"✅ Converted {svg_path} to {png_path} using rsvg-convert")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    
    # Try Inkscape
    try:
        cmd = ['inkscape']
        if width:
            cmd.extend(['--export-width', str(width)])
        if height:
            cmd.extend(['--export-height', str(height)])
        cmd.extend(['--export-type=png', f'--export-filename={png_path}', svg_path])
        
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"✅ Converted {svg_path} to {png_path} using Inkscape")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    
    # Try ImageMagick convert
    try:
        cmd = ['convert']
        if width and height:
            cmd.extend(['-size', f'{width}x{height}'])
        cmd.extend([svg_path, png_path])
        
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(f"✅ Converted {svg_path} to {png_path} using ImageMagick")
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    
    print(f"❌ Failed to convert {svg_path} - no conversion tools available")
    return False

def main():
    """Convert GoSnel icon SVG files to PNG"""
    
    # Get the icons directory
    icons_dir = Path(__file__).parent
    
    # Icons to convert
    conversions = [
        {
            'svg': 'icon-only-1024.svg',
            'png': 'icon-only-1024.png',
            'width': 1024,
            'height': 1024
        },
        {
            'svg': 'icon-only-512.svg', 
            'png': 'icon-only-512.png',
            'width': 512,
            'height': 512
        },
        {
            'svg': 'icon-only-1024.svg',
            'png': 'icon-only-256.png',
            'width': 256,
            'height': 256
        },
        {
            'svg': 'icon-only-512.svg',
            'png': 'icon-only-128.png', 
            'width': 128,
            'height': 128
        }
    ]
    
    print("🎨 Converting GoSnel SVG icons to PNG...")
    print("=" * 50)
    
    success_count = 0
    
    for conversion in conversions:
        svg_path = icons_dir / conversion['svg']
        png_path = icons_dir / conversion['png']
        
        if not svg_path.exists():
            print(f"⚠️  SVG file not found: {svg_path}")
            continue
            
        success = convert_svg_to_png(
            str(svg_path),
            str(png_path), 
            conversion['width'],
            conversion['height']
        )
        
        if success:
            success_count += 1
            # Check file size
            size = png_path.stat().st_size if png_path.exists() else 0
            print(f"   📁 Size: {size:,} bytes")
    
    print("=" * 50)
    print(f"🎯 Conversion complete: {success_count}/{len(conversions)} files converted")
    
    if success_count == 0:
        print("\n🛠️  To install conversion tools:")
        print("   • Homebrew: brew install librsvg imagemagick")
        print("   • Manual: Open SVG files in browser and save as PNG")

if __name__ == "__main__":
    main()
