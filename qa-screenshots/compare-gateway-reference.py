from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
reference = Image.open(root / 'portfolio-option3-assets' / 'gateway-option2-approved.png').convert('RGB')
captures = root / 'qa-screenshots' / 'gateway-final'

def side_by_side(reference_crop, live_path, output_path, viewport):
    live = Image.open(live_path).convert('RGB').resize(viewport, Image.Resampling.LANCZOS)
    crop = reference.crop(reference_crop)
    scale = min(viewport[0] / crop.width, viewport[1] / crop.height)
    crop = crop.resize((round(crop.width * scale), round(crop.height * scale)), Image.Resampling.LANCZOS)
    panel = Image.new('RGB', viewport, '#0b0f13')
    panel.paste(crop, ((viewport[0] - crop.width) // 2, (viewport[1] - crop.height) // 2))
    comparison = Image.new('RGB', (viewport[0] * 2, viewport[1]), '#0b0f13')
    comparison.paste(panel, (0, 0))
    comparison.paste(live, (viewport[0], 0))
    comparison.save(output_path, quality=92)

side_by_side((1167, 78, 1508, 931), captures / 'mobile-390x844-07-final.png', captures / 'mobile-reference-side-by-side.jpg', (390, 844))
side_by_side((17, 54, 1129, 944), captures / 'desktop-1440x900-07-final.png', captures / 'desktop-reference-side-by-side.jpg', (1440, 900))
