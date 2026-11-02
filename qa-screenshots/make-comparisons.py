from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

out = Path("qa-screenshots/reference-comparisons")
out.mkdir(exist_ok=True)
refs = {
    "gateway": "approved-option3-concept.png",
    "business": "business-page-concept.png",
    "developer": "developer-page-concept.png",
    "connect": "connect-page-concept.png",
    "links": "connect-page-concept.png",
}
font = ImageFont.load_default()
for route, filename in refs.items():
    ref = Image.open(Path("portfolio-option3-assets") / filename).convert("RGB")
    for kind, box, screenshot, baseline in (
        ("desktop", (18, 16, 1140, 1008), f"viewport-{route}-desktop.png", f"before-{route}-desktop.png"),
        ("mobile", (1164, 16, 1521, 1008), f"viewport-{route}-mobile-390.png", f"before-{route}-mobile.png"),
    ):
        reference = ref.crop(box)
        actual = Image.open(Path("qa-screenshots") / screenshot).convert("RGB")
        height = 700
        reference = reference.resize((round(reference.width * height / reference.height), height))
        actual = actual.resize((round(actual.width * height / actual.height), height))
        pad, label_height = 20, 34
        canvas = Image.new("RGB", (reference.width + actual.width + pad * 3, height + label_height + pad * 2), (11, 15, 19))
        draw = ImageDraw.Draw(canvas)
        reference_label = "CONNECT STYLE REFERENCE (no Links board)" if route == "links" else "APPROVED REFERENCE"
        draw.text((pad, pad), reference_label, font=font, fill=(213, 255, 89))
        draw.text((pad * 2 + reference.width, pad), "FINAL RENDER", font=font, fill=(213, 255, 89))
        canvas.paste(reference, (pad, pad + label_height))
        canvas.paste(actual, (pad * 2 + reference.width, pad + label_height))
        canvas.save(out / f"{route}-{kind}.jpg", quality=88)
        prior = Image.open(Path("qa-screenshots") / baseline).convert("RGB")
        prior = prior.resize((round(prior.width * height / prior.height), height))
        baseline_canvas = Image.new("RGB", (reference.width + prior.width + pad * 3, height + label_height + pad * 2), (11, 15, 19))
        baseline_draw = ImageDraw.Draw(baseline_canvas)
        baseline_draw.text((pad, pad), reference_label, font=font, fill=(213, 255, 89))
        baseline_draw.text((pad * 2 + reference.width, pad), "BEFORE CHANGE", font=font, fill=(213, 255, 89))
        baseline_canvas.paste(reference, (pad, pad + label_height))
        baseline_canvas.paste(prior, (pad * 2 + reference.width, pad + label_height))
        baseline_canvas.save(out / f"{route}-{kind}-before.jpg", quality=88)
