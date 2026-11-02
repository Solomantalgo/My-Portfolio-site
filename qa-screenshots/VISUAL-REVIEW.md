# Option 3 visual review

The before captures and current renders were compared side by side with the latest approved handoff boards. `Links` has no separate board, so its final layout was checked against the Connect board's dark canvas, editorial serif, subdued borders, and compact link/action styling. Historical `docs/design-references/entry-page-*.png` images were not used.

## Baseline differences and route refinements

| Route | Desktop: visible baseline differences and refinements | Mobile: visible baseline differences and refinements |
| --- | --- | --- |
| `/` Gateway | Before, the two wide destination photos were nearly black, the identity sat too low, and the Business/Developer tiles had matching proportions. Restored visible photo crops, centered the editorial identity, and set asymmetric Business/Developer/Connect widths. | Before, tiles were short and their imagery was hard to see. Reflowed to full-width image cards, tuned their height by viewport so 375/390 screens use the available space, and kept the 320x568 layout compact with all three routes plus footer visible. The developer card keeps “Hiring a developer?” and “Projects, skills and CV.” |
| `/business` | Before, the title was a four-line “Websites and digital systems…” headline, while a real site preview occupied the right side and pushed work below the fold. Replaced it with the approved headline and left-side CTA group, moved the collaborator photo to the right, removed the duplicated hero carousel, and brought substantial real screenshot case studies directly after the hero. | Before, text and CTAs clipped horizontally and the hero layout did not recompose. Added a photo band above the copy, fluid headline sizing, and full-width stacked CTAs; real project screenshots and work descriptions follow. |
| `/developer` | Before, the oversized hero consumed most of the first screen and Core skills appeared before engineering projects. Kept the exact employer-focused headline and supporting copy, made Download CV primary, View projects secondary, and moved selected engineering work immediately after the hero. The featured Yaka project is text-led and factual. | Before, the headline, copy, and CTA row clipped at the sides; skills appeared before projects. Rebuilt a readable text/CTA stack, added an intentional blue image band, and placed the featured real project next. Project detail grids stack at phone widths. |
| `/connect` | Before, the sunset image sat in a separate right-side panel with less atmospheric coverage and the lower strip omitted the `/links` route. Composed the sunset across the right side behind the dark invitation area, retained the approved inclusive copy, emphasized WhatsApp, kept Call outlined and email quiet, and added Kampala / More links in the bottom strip. | Before, the back link clipped at narrow widths and More links was absent. Made the photo a short band above the copy, kept all actions full width with 44px+ targets, and fitted the city / More links strip at 320x568 after reducing only the short-height crop and spacing. |
| `/links` | There was no concept board. Before, the page lacked the logo and used loosely grouped headings/cards. Added the existing logo and bounded content frame, grouped client work and demos in accordions, and kept readable card labels and destinations. | Before, descriptions and card content clipped horizontally. Stacked link cards and industry accordions with 36px icons, 50px accordion controls, wrapping descriptions, and no horizontal overflow. |

## Final visual captures

Viewport captures are at 1440x900 (desktop), 768x900 (tablet), 390x844, 375x667, and 320x568. Full-page captures are named `after-<route>-<size>.png`. The comparison sheets label the approved concept crop and final render; for Links, the left side is the Connect visual-system reference rather than a page-specific concept.

| Route | Desktop final | Mobile final (390x844) | Desktop comparison | Mobile comparison |
| --- | --- | --- | --- | --- |
| Gateway | [1440x900](viewport-gateway-desktop.png) | [390x844](viewport-gateway-mobile-390.png) | [Reference / final](reference-comparisons/gateway-desktop.jpg) | [Reference / final](reference-comparisons/gateway-mobile.jpg) |
| Business | [1440x900](viewport-business-desktop.png) | [390x844](viewport-business-mobile-390.png) | [Reference / final](reference-comparisons/business-desktop.jpg) | [Reference / final](reference-comparisons/business-mobile.jpg) |
| Developer | [1440x900](viewport-developer-desktop.png) | [390x844](viewport-developer-mobile-390.png) | [Reference / final](reference-comparisons/developer-desktop.jpg) | [Reference / final](reference-comparisons/developer-mobile.jpg) |
| Connect | [1440x900](viewport-connect-desktop.png) | [390x844](viewport-connect-mobile-390.png) | [Reference / final](reference-comparisons/connect-desktop.jpg) | [Reference / final](reference-comparisons/connect-mobile.jpg) |
| Links | [1440x900](viewport-links-desktop.png) | [390x844](viewport-links-mobile-390.png) | [Connect style / final](reference-comparisons/links-desktop.jpg) | [Connect style / final](reference-comparisons/links-mobile.jpg) |

The remaining exact viewport captures are available for every route:

| Route | 320x568 | 375x667 | 768x900 |
| --- | --- | --- | --- |
| Gateway | [Capture](viewport-gateway-mobile-320.png) | [Capture](viewport-gateway-mobile-375.png) | [Capture](viewport-gateway-tablet-768.png) |
| Business | [Capture](viewport-business-mobile-320.png) | [Capture](viewport-business-mobile-375.png) | [Capture](viewport-business-tablet-768.png) |
| Developer | [Capture](viewport-developer-mobile-320.png) | [Capture](viewport-developer-mobile-375.png) | [Capture](viewport-developer-tablet-768.png) |
| Connect | [Capture](viewport-connect-mobile-320.png) | [Capture](viewport-connect-mobile-375.png) | [Capture](viewport-connect-tablet-768.png) |
| Links | [Capture](viewport-links-mobile-320.png) | [Capture](viewport-links-mobile-375.png) | [Capture](viewport-links-tablet-768.png) |

## Viewport checks

Every route was captured at 320x568, 375x667, 390x844, 768x900, and 1440x900. All mobile widths report `scrollWidth === viewportWidth`; the Gateway reports no vertical scrolling at all three phone widths. The Connect page also fits 320x568 with its bottom strip visible. Long Business, Developer, and Links pages scroll vertically as intended. Desktop and tablet document widths are 15px narrower than the emulated viewport because the desktop scrollbar occupies that space; none of the pages has horizontal overflow.

## Interaction checks

- Gateway destination anchors resolve to `/business`, `/developer`, and `/connect`; clicking the developer card navigates to `/developer`. A Tab key focuses the logo link with a visible outline.
- Business hero CTAs target `#work` and `#packages`; two real client screenshot cards render.
- Developer Download CV returns HTTP 200 for `/Solomon-Kisense-CV.pdf`; View projects targets `#projects`.
- Connect WhatsApp, phone, email, and More links retain `https://wa.me/256775224728`, `tel:0775224728`, `mailto:kmantalgosolo@gmail.com`, and `/links`. Primary/secondary action heights are 48px; email is 44px.
- Links client-work accordion toggles from open to closed and hides its two cards. Existing destinations and grouping data were retained.

The five route compositions were visually checked at desktop and 390px mobile against their approved direction, and the 320px and 375px captures were inspected for clipping and fit. Links was visually checked against the shared Connect visual system because it has no separate board.

## Route and viewport sign-off

| Route | 1440x900 desktop | 768 tablet | 390x844 mobile | 375x667 mobile | 320x568 mobile |
| --- | --- | --- | --- | --- | --- |
| `/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/business` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/developer` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/connect` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/links` | ✅ | ✅ | ✅ | ✅ | ✅ |
