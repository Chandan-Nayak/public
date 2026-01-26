#!/usr/bin/env python3
"""Process latest.png to generate favicon and thumbnails"""
from PIL import Image
import os

assets_dir = os.path.expanduser("~/Library/CloudStorage/GoogleDrive-chandan.phoenix@gmail.com/My Drive/Learn/resources/assets")
static_dir = os.path.expanduser("~/Documents/public/quartz/static")
os.makedirs(static_dir, exist_ok=True)

source_img = os.path.join(assets_dir, "latest.png")

if not os.path.exists(source_img):
    print(f"❌ Error: {source_img} not found")
    exit(1)

print(f"📷 Processing {source_img}...")

# Open source image
img = Image.open(source_img)
print(f"   Source image size: {img.size}, mode: {img.mode}")

# Convert RGBA to RGB if needed
if img.mode == 'RGBA':
    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
    rgb_img.paste(img, mask=img.split()[3])
    img = rgb_img

# 1. Create icon.png (512x512)
icon_img = img.copy()
icon_img.thumbnail((512, 512), Image.Resampling.LANCZOS)
canvas = Image.new('RGB', (512, 512), 'white')
offset = ((512 - icon_img.width) // 2, (512 - icon_img.height) // 2)
canvas.paste(icon_img, offset)
icon_path = os.path.join(static_dir, "icon.png")
canvas.save(icon_path, quality=95)
print(f"✅ icon.png created ({canvas.size})")

# 2. Create og-image.png (1200x630)
og_img = img.copy()
og_img.thumbnail((1200, 630), Image.Resampling.LANCZOS)
canvas2 = Image.new('RGB', (1200, 630), 'white')
offset2 = ((1200 - og_img.width) // 2, (630 - og_img.height) // 2)
canvas2.paste(og_img, offset2)
og_path = os.path.join(static_dir, "og-image.png")
canvas2.save(og_path, quality=95)
print(f"✅ og-image.png created ({canvas2.size})")

# 3. Create favicon (48x48) - save as PNG
favicon_img = img.copy()
favicon_img.thumbnail((48, 48), Image.Resampling.LANCZOS)
canvas3 = Image.new('RGB', (48, 48), 'white')
offset3 = ((48 - favicon_img.width) // 2, (48 - favicon_img.height) // 2)
canvas3.paste(favicon_img, offset3)
favicon_path = os.path.join(static_dir, "favicon.png")
canvas3.save(favicon_path)
print(f"✅ favicon.png created ({canvas3.size})")

print("\n✅ All icons processed successfully!")
