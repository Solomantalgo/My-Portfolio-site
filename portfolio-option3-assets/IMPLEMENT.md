# Solomantalgo Modular Studio — approved design implementation

Repository: https://github.com/Solomantalgo/My-Portfolio-site.git

Implement the approved Option 3 across the active website. The visuals in this package are the new authority. The older `docs/design-references/entry-page-*.png` are historical and must not override this direction. Inspect the current local checkout and uncommitted work first; GitHub `main` may be behind it. Do not push or deploy.

## Reference hierarchy and truthfulness

1. `approved-option3-concept.png`: gateway composition, mood, type contrast, three destination tiles, desktop/mobile reflow.
2. `business-page-concept.png`: Business page composition and hierarchy.
3. `developer-page-concept.png`: Developer page composition and hierarchy.
4. `connect-page-concept.png`: Connect page composition and hierarchy.
5. Six named standalone PNG files: actual photographic assets; use them as images, never the concept boards as page backgrounds.
6. The local repository: source of truth for logo, routes, project facts, prices, contact details, CV, links and interactions.

Concept-board copy below the heroes, case-study names, project photos, metrics and education text are illustrative. In particular, the Developer concept's project imagery, made-up secondary projects and degree label are not factual. Replace all such content with verified repository content. Never imply generated images depict completed client or engineering work.

## Active routes and scope

The GitHub `main` `src/App.jsx` maps `/`, `/business`, `/developer`, `/links`, and `/connect`. Verify this locally. `src/pages/Home.jsx` exists on main but is not routed; do not redesign or delete it without confirming its role. Redesign all active routes; preserve route destinations and working actions. No new content claims, pricing, credentials, testimonials, outcomes, or project capabilities without evidence.

## Design system

Use near-black `#0B0F13` for the canvas, `#14191D` for cards, `#20262B` for raised surfaces, `#354047` for restrained borders, warm off-white `#F4F0E8` for primary text and `#AAB3B9` for supporting text. Use lime `#D5FF59` for the main Business/brand CTA and tiny rules, blue `#3278F6` for Developer actions, violet `#A77BD0` for Connect, and warm amber `#D6A05D` within imagery and very limited accent elements. Check contrast; adjust exact values when needed.

Typography should match the high-contrast editorial display serif in the concept, paired with a clean sans-serif for interface text. A locally bundled variable display serif such as Fraunces plus a bundled/interoperable sans such as Inter is acceptable; inspect existing fonts first. Do not use serif for dense tables, forms, labels or small body copy. Use fluid `clamp()` sizing, comfortable line height, and actual text in DOM. Use the existing Solomantalgo logo asset, correctly scaled and not replaced by concept-board wordmark art.

Use restrained 1px rules, subtle inner borders, dark image gradients for text legibility, and minimal hover lift/edge illumination. Avoid big outer glows, gratuitous particles, excessive blur, parallax and delayed reveal that hides content. Honor `prefers-reduced-motion`.

## Gateway `/`

Desktop: a centered wide near-black composition with generous padding. Logo top-left; any navigation must have a purpose. Use `gateway-hero.png` as subdued upper-right atmospheric background, preserving the dark left half. Place a large editorial brand/headline and short supporting statement above three image-led destination tiles. Tiles have asymmetric widths (Business widest, employer path medium, Connect narrowest) with images `gateway-business.png`, `gateway-developer.png`, `gateway-connect.png`. The middle tile should say “Hiring a developer?” with “Projects, skills and CV.”, while still linking to `/developer`; desktop navigation can use “Work & CV”. Text and arrows are HTML/SVG over a dark gradient, never baked into images. Each entire tile is one link to its actual route. Give each a distinct subdued accent and obvious keyboard focus.

Mobile: recompose rather than shrink. Compact logo and headline at top; three stacked full-width destination tiles, each with visible label, one-line meaning, and arrow. All three choices must be discoverable without a hamburger/ellipsis menu. Omit the decorative ellipsis visible in the concept board. Fit the initial gateway within small phone viewport including 320x568 without accidental vertical/horizontal overflow, while preserving readable type and usable tap targets. At very short heights, reduce decorative image area and secondary copy before shrinking core links.

## Business `/business`

Use `business-hero.png` with headline/CTAs on the dark left and collaborators on the right; mobile crop moves the image above or behind the title with an intentional gradient and no face/hand cropping that harms composition. Build the approved visual hierarchy: concise offer, primary enquiry CTA, secondary work CTA, selected real work, capabilities, process, pricing, FAQ/contact. Reuse the existing factual service/pricing data and business workflows. Do not copy fictitious case studies or text from the concept image.

Selected work uses real site-preview assets/screenshots already in the repository where accurate. Each case study should identify the client, actual work, and useful link; no generated scenic image may stand in for a client project screenshot. Pricing must remain exact and readable on mobile (stacked package cards or another usable native layout). Preserve enquiry, WhatsApp and other CTA destinations.

## Developer `/developer`

Use `developer-hero.png` with the employer-focused introduction on the dark left, written in Solomon's own voice. Eyebrow: “FOR EMPLOYERS & RECRUITERS”; headline: “I’m Solomon. I build web and systems software.”; concise supporting copy: “Explore the projects I’ve built and contributed to, my technical skills, and my CV.” Make “Download CV” the prominent blue primary action using the existing verified PDF; “View projects” is secondary. Preserve actual project facts, roles and team attribution, existing CV link and verified background. Structure: introduction, selected engineering work, compact additional projects, grouped strengths, background, contact. Feature the real IoT token project with actual source images/diagrams if present, or a text-led case study until evidence exists. Never use the concept-board generated dashboard or electronics photo as proof of that project; never copy its education text or invented secondary projects.

On mobile, hero title and CTA remain readable, the featured project follows immediately, and project details are stacked with no horizontal clipping. Ensure external project links have clear labels and accurate targets.

## Connect `/connect` and Links `/links`

The latest `connect-page-concept.png` supersedes the earlier work-focused and directory-style Connect visuals. This is for clients, employers, friends and family alike. Build a single inclusive invitation: dark text area on the left and `gateway-connect.png` as a prominent but readable sunset crop on the right (a short image band above copy on mobile). Headline: “Let’s talk.” Supporting copy: “For a project, an opportunity, or simply to say hello — I’d love to hear from you.” A violet “Chat on WhatsApp” action is primary; a clearly tappable outlined “Call me” action is secondary; “Send an email” is a quieter link. A slim lower strip holds Kampala and “More links” pointing to the existing `/links` page, so personal social channels remain discoverable without making this page a directory. Use verified WhatsApp, email and phone destinations. Retain direct `tel:` behavior and never invent a callback form. Use actual brand asset, DOM text and real clickable controls; no hamburger, portrait placeholder, contact-form wall or extra cards. Verify strong contrast, 44px+ action targets and mobile crop.

## Assets and performance

Copy source PNGs into a clearly named project asset folder without overwriting originals. Produce optimized WebP/AVIF variants at suitable display sizes and keep the PNG originals as source files. Use `image-set`/`picture` or an equivalent approach where helpful. Preload only the essential gateway hero; lazy-load below-the-fold images. Preserve crop via `object-position`/background-position at desktop and mobile. Provide fallback color/gradient if images fail. Do not use images as text. Do not generate more photos by default; project evidence must be real.

## Workflow and QA

1. Inspect local Git status, active route map, CSS cascade, assets and current browser rendering. Record before screenshots.
2. Establish tokens and reusable visual primitives; scope CSS to avoid cross-route regressions.
3. Implement gateway first and compare to the approved concept at desktop and mobile. Do not proceed until its layout, typography, imagery and interaction match.
4. Implement Business, then Developer, then Connect and Links; inspect each route after edits and refine. Reuse shared elements without homogenizing the distinct route accents.
5. Check 320x568, 360x640, 375x667, 390x844, 430x932, 768, 1024, 1280x800, 1366x768 and 1440x900. Gateway initial viewport has no unintended scrolling; long inner pages scroll normally. Verify no horizontal overflow or clipped controls.
6. Test all links, forms/enquiry actions, project navigation, CV download, responsive nav, keyboard/focus, alt text, contrast, reduced motion, and page-level console/network errors. Verify text is selectable and layout works without images.
7. Run `npm run lint`, `npm run build`, any existing tests and `git diff --check`. Report exact pass/fail and browser coverage. Do not weaken checks.

Final report must show a checkmark per active route only when visually implemented and verified, a file/asset list, before/after screenshots, exact command results, deliberate deviations, and incomplete items. Keep changes local; do not push or deploy.
