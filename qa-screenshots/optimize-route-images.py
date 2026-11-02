from pathlib import Path
from PIL import Image

root = Path("public/images")
specs = [
    ("gateway-workspace.png", "gateway-workspace-640.webp", 640, 82),
    ("gateway-workspace.png", "gateway-workspace-1280.webp", 1280, 82),
    ("studio/gateway-connect.png", "studio/gateway-connect-640.webp", 640, 82),
    ("studio/gateway-connect.png", "studio/gateway-connect-1280.webp", 1280, 82),
    ("studio/business-hero.png", "studio/business-hero-mobile.webp", 960, 82),
    ("studio/developer-hero.png", "studio/developer-hero-mobile.webp", 960, 82),
    ("me.png", "me-192.webp", 192, 84),
    ("me.png", "me-384.webp", 384, 84),
    ("jopeem-website-preview.png", "jopeem-website-preview-640.webp", 640, 88),
    ("jopeem-website-preview.png", "jopeem-website-preview-960.webp", 960, 88),
    ("levinah-website-preview.png", "levinah-website-preview-640.webp", 640, 88),
    ("levinah-website-preview.png", "levinah-website-preview-960.webp", 960, 88),
    ("medical.png", "medical-480.webp", 480, 84),
    ("medical.png", "medical-960.webp", 960, 84),
    ("saloon.png", "saloon-480.webp", 480, 84),
    ("saloon.png", "saloon-960.webp", 960, 84),
]

for source, destination, width, quality in specs:
    source_path = root / source
    image = Image.open(source_path)
    height = round(image.height * width / image.width)
    image = image.convert("RGB").resize((width, height), Image.Resampling.LANCZOS)
    output_path = root / destination
    image.save(output_path, "WEBP", quality=quality, method=6)
    print(
        f"{source}\t{Image.open(source_path).width}x{Image.open(source_path).height}"
        f"\t{source_path.stat().st_size}\t{destination}\t{width}x{height}"
        f"\t{output_path.stat().st_size}"
    )

logo_source = root / "newlogo.png"
logo = Image.open(logo_source).convert("RGBA")
for width in (320, 640):
    height = round(logo.height * width / logo.width)
    output_path = root / f"newlogo-{width}.png"
    logo.resize((width, height), Image.Resampling.LANCZOS).save(
        output_path, "PNG", optimize=True, compress_level=9
    )
    print(
        f"newlogo.png\t{logo.width}x{logo.height}\t{logo_source.stat().st_size}"
        f"\tnewlogo-{width}.png\t{width}x{height}\t{output_path.stat().st_size}"
    )
