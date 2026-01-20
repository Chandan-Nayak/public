#!/usr/bin/env python3
"""Process and place website icons"""
from PIL import Image
import os

static_dir = os.path.expanduser("~/Documents/public/public/static")
os.makedirs(static_dir, exist_ok=True)

# Check if old icon exists
old_icon = os.path.join(static_dir, "icon.png")

if os.path.exists(old_icon):
    print("Processing existing icon...")
    
    # Create 512x512 favicon
    img = Image.open(old_icon)
    img.thumbnail((512, 512), Image.Resampling.LANCZOS)
    canvas = Image.new('RGB', (512, 512), 'white')
    offset = ((512 - img.width) // 2, (512 - img.height) // 2)
    canvas.paste(img, offset)
    canvas.save(os.path.join(static_dir, "icon.png"))
    print(f"✅ icon.png ({canvas.size})")
    
    # Create 1200x630 social media image
    img2 = Image.open(old_icon)
    img2.thumbnail((1200, 630), Image.Resampling.LANCZOS)
    canvas2 = Image.new('RGB', (1200, 630), 'white')
    offset2 = ((1200 - img2.width) // 2, (630 - img2.height) // 2)
    canvas2.paste(img2, offset2)
    canvas2.save(os.path.join(static_dir, "og-image.png"))
    print(f"✅ og-image.png ({canvas2.size})")
else:
    print("⚠️  No icon.png found to process")
    exit(1)

print("\n✅ Icons processed and placed!")
