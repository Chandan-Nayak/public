#!/usr/bin/env python3
"""Create CN monogram brand icons"""
from PIL import Image, ImageDraw
import os

static_dir = os.path.expanduser("~/Documents/public/public/static")
os.makedirs(static_dir, exist_ok=True)

# Brand colors
BLUE = (0, 132, 212)      # #0084D4
GREEN = (118, 192, 67)    # #76C043

def create_favicon():
    """Create 512x512 favicon"""
    img = Image.new('RGB', (512, 512), 'white')
    draw = ImageDraw.Draw(img)
    
    cx, cy = 256, 256
    r = 140
    
    # Blue C arc
    draw.arc([cx - r, cy - r, cx + r, cy + r], 45, 315, fill=BLUE, width=70)
    
    # Green N
    nx = cx + 80
    draw.arc([nx - 60, cy - 140, nx + 80, cy + 60], 270, 90, fill=GREEN, width=70)
    draw.arc([nx + 40, cy - 140, nx + 180, cy + 60], 270, 90, fill=GREEN, width=70)
    
    img.save(os.path.join(static_dir, 'icon.png'))
    return img.size

def create_og_image():
    """Create 1200x630 OG image"""
    img = Image.new('RGB', (1200, 630), 'white')
    draw = ImageDraw.Draw(img)
    
    cx, cy = 600, 315
    r = 200
    
    # Blue C arc
    draw.arc([cx - r, cy - r, cx + r, cy + r], 45, 315, fill=BLUE, width=100)
    
    # Green N
    nx = cx + 120
    draw.arc([nx - 90, cy - 200, nx + 120, cy + 90], 270, 90, fill=GREEN, width=100)
    draw.arc([nx + 60, cy - 200, nx + 270, cy + 90], 270, 90, fill=GREEN, width=100)
    
    img.save(os.path.join(static_dir, 'og-image.png'))
    return img.size

print("Creating CN monogram icons...")
size1 = create_favicon()
print(f"✅ icon.png created: {size1}")

size2 = create_og_image()
print(f"✅ og-image.png created: {size2}")

print("✅ All icons ready!")
