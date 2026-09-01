# Solomantalgo Portfolio & Business Website Upgrade --- Agent Implementation Prompt

## Role

You are a senior product designer, conversion-focused UX strategist,
frontend engineer, and web/systems portfolio architect.

Your task is to **improve the existing Solomantalgo portfolio repository
in place**, not rebuild it blindly.

Repository:

`https://github.com/Solomantalgo/My-Portfolio-site.git`

Before changing anything:

1.  Inspect the existing React/Vite project, components, routing, CSS,
    assets, project data, responsive behavior, metadata and existing
    interactions.
2.  Preserve useful existing functionality and the recognizable
    Solomantalgo visual identity where it still works.
3.  Remove or replace stale business information.
4.  Test every change on desktop and mobile.
5.  Do not invent client testimonials, client results, statistics,
    company claims or project facts.
6.  Clearly distinguish **real client work** from **demo concepts / work
    in progress**.
7.  The site must communicate that Solomon is both a **web developer and
    systems developer**, while still speaking in simple business
    language to customers.
8.  Do not make the customer-facing site feel like a technical CV.
    Translate technical capability into business outcomes.

------------------------------------------------------------------------

# 1. Overall Website Architecture

The website now serves three different audiences:

1.  **Clients / business owners**
2.  **Employers / recruiters**
3.  **Friends, family or people simply looking for Solomon**

These audiences have different goals and must not be forced through the
same content.

Use this architecture:

-   `/` --- primary **business/client website**
-   `/developer` --- dedicated **developer/employer portfolio**
-   `/links` --- short **bio gateway / link hub**
-   Existing useful contact/connect routes may remain if they still add
    value.

The social-media bio link should point to `/links`.

The main domain `/` remains client-focused so that direct visitors and
search traffic immediately understand the commercial service.

------------------------------------------------------------------------

# 2. `/` --- Universal Audience Gateway With Floating Popup

The root domain `https://solomantalgo.com` is the universal entrance for mixed traffic from bios, profiles, direct visits and people who know Solomon personally.

Do **not** use `/links` for this experience. The existing `/links` route is already used for QR purposes and must remain unchanged unless a separate explicit requirement is provided later.

The root page should be a **minimal branded doorway**, not a mini portfolio, biography or business-sales homepage.

Do not place a large personal introduction, skills summary, service explanation, portrait biography, project grid, pricing section or long copy before the visitor chooses their intent.

## Minimal root background

Keep the base page intentionally simple.

It may contain:
- Solomantalgo logo / brand mark
- Refined dark background using the existing identity
- Very subtle visual texture, glow or motion
- Minimal footer/legal/contact detail if useful

Do not let the background compete with the audience chooser.

## Initial floating popup

When someone visits `solomantalgo.com`, display a polished floating popup/card:

### What brings you here?

> Choose the option that best describes what you're looking for.

Provide three concise paths.

### Client / Business Owner

**I need a website or digital solution**

> Explore websites, booking, ordering and digital systems designed around how your business works.

CTA: **Explore Business Solutions →**

Destination: `/business`

Use the primary Solomantalgo lime/green accent.

### Employer / Recruiter

**I'm an employer or recruiter**

> View my technical skills, projects, experience, engineering work and CV.

CTA: **View Developer Portfolio →**

Destination: `/developer`

Use a restrained blue accent.

### Personal

**Just looking for me**

> Find my social profiles or contact me directly.

CTA: **Connect With Me →**

Destination: `/connect`

Use a restrained purple accent.

## Popup behavior

The chooser should feel like a floating decision card rather than a heavy full-screen marketing modal.

Desktop:
- Center it.
- Target roughly 520–650px width depending on final composition.
- Use strong hierarchy and comfortable spacing.
- Keep the three choices obvious.
- Avoid excessive text.

Mobile:
- Use a polished bottom sheet or compact centered card.
- Stack choices vertically.
- Use large touch targets.
- Avoid horizontal scrolling.
- Respect device safe areas.
- Keep the core decision accessible without excessive scrolling.

The popup may be dismissed, but dismissing it must not trap the visitor.

After dismissal, keep a small unobtrusive floating control labelled approximately:

**What brings you here?**

It should reopen the chooser at any time.

## Returning visitors

Use session storage or local storage thoughtfully:
- Show the chooser prominently for a first visit.
- Remember a selected path or intentional dismissal.
- Do not force the popup repeatedly during normal navigation in the same session.
- Always provide a way to reopen it.
- Do not automatically redirect returning visitors in a way that prevents them choosing another path.

## Audience-specific communication

The chooser is a routing layer.

After selection:
- Clients go to `/business` and receive business outcomes, real work, solutions, pricing and conversion CTAs.
- Employers go to `/developer` and receive technical skills, engineering responsibilities, projects, experience, GitHub and CV.
- Personal visitors go to `/connect` and receive concise social/contact information.

Do not make any audience navigate another audience's funnel to find what they need.

## Preserve `/links`

Do not redesign, repurpose, delete or route the root gateway through `/links`.

Treat the existing `/links` experience as QR-specific and preserve its current behavior.

# 3. `/business` — Client Website Positioning

The homepage should no longer feel primarily like a programmer's
personal portfolio.

It should feel like a professional **web and digital systems studio led
by Solomon**.

The customer-facing positioning must communicate both:

-   Web development
-   Systems development / business workflow solutions

However, avoid developer jargon.

The business owner should understand what Solomon can do for their
business without knowing terms such as state management, REST APIs,
CRUD, React hooks, etc.

## Hero

Replace the current name-dominated/developer-style hero with a value-led
hero.

Suggested direction:

### Eyebrow

**Web & Systems Development · Kampala, Uganda**

### Main headline

**Websites and digital systems built around how your business actually
works.**

Alternative wording may be used if it is stronger, but preserve this
meaning.

### Supporting copy

Communicate:

> Professional websites and practical digital solutions for salons,
> restaurants, pharmacies and growing businesses --- from getting your
> business online to booking, ordering, customer workflows and
> integrations.

### Primary CTA

**See Real Client Work**

### Secondary CTA

**View Packages**

### Trust/reassurance line

Communicate genuine differentiators such as:

-   Kampala, Uganda
-   Pricing in UGX
-   Direct communication with the developer
-   2 months free routine updates after deployment

Do not invent project counts or client counts.

## Remove the current Solo vs Agency comparison

Remove the existing floating comparison that makes broad claims such as
agency delivery times, agency prices, ticketing or generic local
knowledge.

It is unnecessary for conversion and contains claims that are difficult
to substantiate.

Replace it with a strong visual demonstration of actual work.

### Hero visual

Create a polished browser/device showcase featuring genuine projects.

Prioritize real client work such as:

-   Jopeem Pharmacy --- `https://jopeempharmacy.com`
-   Levinah Salon --- `https://www.levinahsalons.com`
-   BiteRight Restaurant --- `https://biteright-restuarant.vercel.app/`

Use tasteful static browser mockups or a slow crossfade/carousel.

Do not use aggressive animation.

Label it clearly:

**Real websites built for businesses**

------------------------------------------------------------------------

# 4. Homepage Information Hierarchy

Recommended `/business` page order:

1.  Hero
2.  Trust/reassurance strip
3.  Real client work
4.  What can your website or system do?
5.  Website packages
6.  Industry demos
7.  How the process works
8.  Why work with Solomantalgo
9.  Two-month free updates reassurance
10. FAQ
11. Strong final CTA/contact
12. Footer

Evidence should appear before the full pricing section.

------------------------------------------------------------------------

# 5. Real Client Work vs Demo Concepts

The existing portfolio contains many demos. Do not present every project
with equal weight.

Create two clear categories.

## Section A --- Real Client Work

This must appear first.

Prioritize verified real work currently known:

### Jopeem Pharmacy

Official site:

`https://jopeempharmacy.com`

Position around outcomes such as:

-   Pharmacy/business online presence
-   Product categories
-   Health services
-   Contact and location
-   Professional domain setup where appropriate

Do not expose private account credentials or internal handover details.

### Levinah Salon

`https://www.levinahsalons.com`

Relevant outcomes:

-   Services and prices
-   Gallery
-   Business information
-   Location/contact
-   WhatsApp booking/contact
-   Mobile-friendly design

### BiteRight Restaurant

`https://biteright-restuarant.vercel.app/`

Relevant functionality:

-   Digital menu
-   Item/quantity selection
-   Ordering flow
-   WhatsApp order handoff
-   Restaurant information/contact/location

### Kookee

Keep only if the existing project is legitimate real client work and the
current link/content remains accurate.

## Real project card design

Do not emphasize technical stacks first.

Each card should communicate:

-   Business name
-   Industry
-   Real Client badge
-   Short business challenge / purpose
-   Important customer-facing features
-   Screenshot
-   **View Live Website**
-   Optional **View Case Study** if a proper case study exists

Technical information can appear secondarily or on the `/developer`
version.

------------------------------------------------------------------------

# 6. Demo Library

After real client work, create:

## Explore Website Ideas by Industry

Use filter chips/tabs such as:

-   Restaurants
-   Salons & Beauty
-   Pharmacy & Healthcare
-   Hotels
-   Retail
-   Other

Clearly label these projects:

**DEMO CONCEPT**

Never imply a demo business is a paying client.

Preserve the useful preview-modal/iframe functionality if it remains
performant and accessible.

On mobile, consider opening the live demo in a new tab rather than
forcing a cramped iframe if that provides better UX.

Remove the generic "More Coming Soon" placeholder if it does not
contribute meaningful conversion.

------------------------------------------------------------------------

# 7. Remove Old Tier Labels From Demo Data

The existing project data contains old labels such as:

-   150k Tier
-   350k Tier
-   700k Tier

Remove these stale labels.

Do not associate a demo with a package solely because of its visual
quality.

If package guidance is shown, base it on functionality.

Examples:

**Suitable from Starter --- UGX 200,000**

or

**Demonstrates Standard functionality --- UGX 350,000+**

Only show such labels when the demonstrated functionality genuinely
corresponds to the current package.

------------------------------------------------------------------------

# 8. Replace Traditional "Services" With Business Capabilities

The customer should understand what Solomon can build without
understanding software terminology.

Use a section such as:

# What can your website or system help your business do?

Create capability groups.

## Get Found

Examples:

-   Business information
-   Contact details
-   Location
-   Basic SEO
-   Google visibility support

## Show What You Offer

Examples:

-   Products
-   Services
-   Prices
-   Galleries
-   Restaurant menus
-   Catalogues

## Receive Enquiries

Examples:

-   WhatsApp
-   Phone
-   Email
-   Structured enquiry forms

## Take Bookings

Examples:

-   Appointment requests
-   Salon/service bookings
-   Restaurant reservations
-   Customer details

## Receive Orders

Examples:

-   Product/service selection
-   Cart/add-to-order
-   Quantity selection
-   Digital menus
-   WhatsApp order handoff

## Improve Business Workflows

This is where systems-development capability becomes visible.

Examples:

-   Customer data capture
-   Structured booking/order workflows
-   Confirmations
-   Business-side information handling
-   Data storage
-   Workflow automation

## Connect Other Services

Examples:

-   Payment providers
-   Merchant/payment flows
-   APIs
-   Third-party integrations
-   Social feeds

Keep the language outcome-focused.

This section should naturally teach visitors why Starter, Standard,
Business and Advanced have different prices.

------------------------------------------------------------------------

# 9. Current Website Package Structure

Remove the obsolete Basic 150k / Standard 350k / Premium 700k structure.

Use the following current structure.

## STARTER --- UGX 200,000

Positioning:

**Professional online presence**

Include:

-   About/business information
-   Call, email & WhatsApp
-   Gallery
-   Products/services with prices
-   Opening hours
-   Map location link/directions
-   Social profile links
-   Simple WhatsApp enquiry/booking request
-   Responsive design
-   Basic SEO

Do not imply this includes:

-   Cart/quantity ordering
-   Structured multi-step forms
-   Embedded map
-   Testimonials
-   Team/staff
-   Stored customer data
-   Automated confirmations
-   Social feeds
-   Provider payment integration

Suggested CTA:

**Choose Starter**

## STANDARD --- UGX 350,000

Positioning:

**Customer interaction**

Everything in Starter, plus:

-   Interactive catalogue/service selection
-   Cart/add-to-order
-   Quantity/selection options
-   Testimonials
-   Embedded Google Map
-   Structured enquiry/booking forms
-   WhatsApp order/booking handoff

Does not automatically include:

-   Stored customer database
-   Advanced booking automation
-   Team/staff
-   Social feeds
-   Merchant/provider payments

Suggested CTA:

**Choose Standard**

This can receive the strongest "Popular" emphasis where appropriate.

## BUSINESS --- UGX 500,000

Positioning:

**Business workflow**

Everything in Standard, plus:

-   Team/staff
-   One advanced booking/order workflow
-   Customer data capture/storage
-   Customer/business confirmations
-   Up to two social feeds
-   Merchant ID/payment-code flow

Suggested CTA:

**Discuss Business Website**

## ADVANCED --- UGX 700,000

Positioning:

**Integrations & advanced workflows**

Everything in Business, plus:

-   Payment-provider/API integration
-   Advanced payment flows
-   More advanced booking/ordering logic
-   More than two social feeds where required
-   Additional third-party integrations
-   Greater customization

Suggested CTA:

**Discuss Your Requirements**

------------------------------------------------------------------------

# 10. Pricing UX

Do not create four enormous cards filled with every inclusion/exclusion.

Each card should show:

-   Package name
-   Price
-   One-line purpose
-   Approximately 5--6 important benefits
-   CTA
-   "See full package details" expandable control

Add a comparison/detail area for visitors who need the full breakdown.

Make pricing easy to scan on mobile.

Do not make price typography so dominant that functionality becomes
secondary.

Add:

## Not sure which package you need?

Copy direction:

> Tell me what you want customers or staff to be able to do and I'll
> recommend the most suitable option.

CTA:

**Tell Me What You Need**

Prefer WhatsApp or the existing hire modal with relevant context.

------------------------------------------------------------------------

# 11. Package Recommender

Implement a lightweight optional recommender:

**Which website solution fits my business?**

Ask a small number of questions.

Example logic:

1.  Do customers mainly need to view your information/services?
2.  Do customers need to select products/services, order or submit
    structured bookings?
3.  Do you need customer information stored or confirmations/workflows?
4.  Do you need payment-provider or third-party integration?

Recommend:

-   Starter
-   Standard
-   Business
-   Advanced

Always phrase the result as guidance, not an immutable quotation.

Example:

**Standard looks like the best starting point --- from UGX 350,000.**

CTA:

**Discuss This Package on WhatsApp**

------------------------------------------------------------------------

# 12. Current Add-On Pricing

Where add-ons are shown, use the current values:

-   Testimonials / Reviews --- UGX 30,000
-   Embedded Google Map --- UGX 20,000
-   Team / Staff --- UGX 40,000
-   Structured Enquiry / Booking Form --- UGX 40,000
-   Cart / Add-to-Order --- UGX 60,000
-   Quantity / Selection --- UGX 30,000
-   Advanced Booking / Ordering Workflow --- from UGX 100,000
-   Customer Data Storage / Database --- from UGX 80,000
-   Customer / Business Confirmations --- from UGX 50,000
-   Social Feed --- UGX 35,000 each
-   Merchant ID / Payment-Code Flow --- UGX 50,000
-   Payment Provider / API --- from UGX 150,000
-   Third-Party Integration --- from UGX 80,000

Do not restore the old "Simple WhatsApp Booking / Ordering Flow --- 50k"
add-on because lightweight WhatsApp enquiry/booking is already part of
Starter.

Do not overwhelm the homepage with all add-ons by default.

Use an expandable section/modal/detail view.

------------------------------------------------------------------------

# 13. Maintenance & Free Updates

Every package includes:

**2 months free routine content updates after deployment.**

Clearly explain that routine updates include things such as:

-   Prices
-   Existing images/text
-   Business information
-   Opening hours
-   Promotions
-   Adding/removing items from existing sections

New pages, redesigns, major features and integrations are quoted
separately.

Current ongoing maintenance options:

-   Active Maintenance --- UGX 80,000/month
-   Weekly Maintenance --- UGX 50,000/month
-   Bi-weekly Maintenance --- UGX 35,000/month
-   Monthly Maintenance --- UGX 25,000/month

Do not show the old 10k monthly maintenance price.

------------------------------------------------------------------------

# 14. Special Restaurant Digital Menu

Do not incorrectly make this part of the normal four website packages.

Solomantalgo also has a focused restaurant digital-menu offering:

**UGX 80,000**

Relevant functionality:

-   QR access
-   Food/menu items and prices
-   Item selection
-   Quantity selection
-   Complete order
-   WhatsApp order submission

Present this only where relevant, such as restaurant-specific content or
an additional solutions section.

Do not make it confuse the main website-package hierarchy.

------------------------------------------------------------------------

# 15. Client Conversion Flow

Every major section should move the visitor toward a clear next action.

Avoid vague repeated "Get Started" buttons.

Use contextual CTAs.

Examples:

-   See Real Client Work
-   View Packages
-   Choose Starter
-   Choose Standard
-   Discuss Business Website
-   Discuss Your Requirements
-   Tell Me What You Need
-   View Live Website
-   Talk on WhatsApp

When a package CTA is clicked, pre-select or carry the package into the
existing hire/contact experience.

If opening WhatsApp, prefill useful context.

Example:

> Hi Solomon, I'm interested in the Standard website package for my
> business. I'd like to discuss what I need.

Do not make the user retype information the site already knows.

------------------------------------------------------------------------

# 16. Process Section

Keep the process simple and commercially reassuring.

Suggested structure:

### 1. Tell me about your business

Understand what the business offers and what customers need to do.

### 2. Choose the right solution

Recommend an appropriate package/scope based on requirements.

### 3. First version is built

Communicate the current fast-delivery approach carefully.

Do not promise every complex Business/Advanced system is fully completed
in 48 hours.

A safer positioning:

> Simple business websites can often have a first version ready in
> around 2 days. More advanced systems depend on scope.

### 4. Review and adjustments

Work with the client on changes.

### 5. Go live

Deployment/domain setup as applicable.

### 6. Two months routine updates included

Make post-launch support visible.

------------------------------------------------------------------------

# 17. Trust & Credibility

Use genuine trust signals.

Good examples:

-   Real client websites visitors can open
-   Kampala, Uganda
-   UGX pricing
-   Direct communication with the developer
-   Transparent package scope
-   2 months routine updates
-   Live project links

Do not invent:

-   Customer counts
-   Revenue generated
-   Conversion increases
-   Star ratings
-   Testimonials
-   Years of experience
-   "X businesses served"

unless verified from existing source material.

------------------------------------------------------------------------

# 18. About / Why Work With Solomon

The customer-facing About section should communicate:

-   Solomon is an independent web and systems developer
-   Based in Kampala, Uganda
-   Works directly with businesses
-   Focuses on practical, affordable digital solutions
-   Can build both customer-facing websites and more structured business
    workflows/systems
-   Direct communication means the client works with the person building
    the solution

Avoid turning this into a long autobiography.

The technical/employment story belongs on `/developer`.

------------------------------------------------------------------------

# 19. `/developer` --- Employer / Recruiter Portfolio

Create a dedicated employer-focused page.

The purpose is not to sell website packages.

The page should answer:

-   What can Solomon build?
-   What technologies does he use?
-   What engineering responsibilities has he handled?
-   What projects demonstrate his skills?
-   What is his education/work background?
-   Where is his CV?
-   Where is his GitHub?
-   How can a recruiter contact him?

## Recommended order

1.  Professional developer hero
2.  Technical summary
3.  Core technical skills
4.  Selected technical projects
5.  Experience
6.  Education
7.  Engineering/problem-solving case studies
8.  GitHub
9.  Download CV
10. Employer contact CTA

## Positioning

Communicate both:

**Web Developer** and **Systems Developer**

Potential headline:

**Web & Systems Developer building practical digital products and
business solutions.**

Do not use client package/pricing content on this page.

## Project framing

The same project may appear on both client and employer pages, but frame
it differently.

### Client framing example

**BiteRight Restaurant**

> Digital menu and ordering experience that lets customers select items
> and send complete orders through WhatsApp.

### Employer framing example

Discuss actual implementation details supported by the
repository/project, such as:

-   frontend architecture
-   state/data handling
-   integrations
-   API/data synchronization
-   responsive behavior
-   deployment
-   backend/database responsibilities

Do not invent technical implementation details that have not been
verified.

## CV

Include a prominent:

**Download CV**

button.

If a current CV file is not already in the repository, create the UI
placeholder/structure but do not fabricate a CV. Clearly identify where
the real CV file should be added.

## GitHub

Link to Solomon's actual GitHub profile/repositories.

Technical stack should be presented here rather than dominating the
customer-facing portfolio.

------------------------------------------------------------------------

# 20. Navigation

The `/business` navigation should be business-oriented.

Suggested desktop navigation:

-   Work
-   Solutions
-   Packages
-   Process
-   About
-   FAQ
-   **For Employers**
-   Contact / Let's Talk

"For Employers" routes to `/developer`.

Do not make employer content compete visually with the primary business
CTA.

Mobile navigation must remain compact and accessible.

On `/developer`, provide a subtle link back to:

**Business Services**

On `/links`, do not use a large traditional navigation bar if it
distracts from the three choices.

------------------------------------------------------------------------

# 21. Visual Direction

Keep the recognizable dark Solomantalgo identity, but mature it.

The site should feel:

-   Professional
-   Modern
-   Confident
-   African/Ugandan business-aware
-   Technical without looking like a hacker portfolio
-   Premium without pretending to be a large agency

Keep lime/green as the primary brand accent.

Use blue primarily for the employer/developer journey.

Use purple primarily for the personal/connect journey.

Avoid excessive neon glow, particle effects, cursor gimmicks, or
animation that distracts from content.

Review the custom cursor. Disable it on touch devices and remove it
entirely if it harms usability/accessibility.

Use motion sparingly:

-   subtle reveal
-   gentle hover
-   slow project/browser transitions

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# 22. Mobile-First UX

The majority of prospects may encounter the site from WhatsApp/social
links, so mobile quality is critical.

For every page:

-   Test approximately 320px, 360px, 390px, 430px widths
-   No horizontal overflow
-   Minimum comfortable touch targets
-   Sticky/floating elements must not cover content
-   Pricing cards should scan cleanly
-   Buttons should generally become full-width where appropriate
-   Modal content must fit small screens
-   Iframes must not trap the visitor
-   Text must not become excessively tiny
-   Avoid huge hero heights
-   Put key CTA and proof high enough to be seen without endless
    scrolling
-   Lazy-load non-critical media

------------------------------------------------------------------------

# 23. Contact / Hire Experience

Preserve the existing hire modal/contact functionality if useful, but
improve it.

Collect only information necessary to start the conversation.

Suggested fields:

-   Name
-   Business name
-   Business type
-   What do you want customers/staff to be able to do?
-   Package of interest, if known
-   Preferred contact method

Do not create a long intimidating form.

WhatsApp should remain a major contact option.

For package CTAs, automatically populate the selected package.

------------------------------------------------------------------------

# 24. SEO & Metadata

Update metadata to reflect the expanded positioning.

The `/business` page should target concepts such as:

-   Web developer Kampala
-   Website designer Kampala
-   Business website Uganda
-   Web design Uganda
-   Business systems developer Uganda
-   Website development Kampala

Do not keyword-stuff.

Use appropriate:

-   title
-   meta description
-   canonical
-   Open Graph
-   Twitter/social preview
-   structured data where valid
-   favicon
-   sitemap/robots if applicable

The `/developer` page should have separate recruiter/developer metadata.

The `/links` page should not compete heavily with the main business page
for SEO.

------------------------------------------------------------------------

# 25. Accessibility & Performance

Implement:

-   semantic headings
-   keyboard navigation
-   visible focus states
-   accessible modal behavior
-   ESC-to-close where appropriate
-   meaningful image alt text
-   sufficient contrast
-   reduced-motion support
-   no interaction that depends only on color
-   lazy-loaded project images
-   optimized images
-   avoid unnecessary external image dependencies where local optimized
    assets are more reliable
-   responsive images where appropriate

Audit Lighthouse/Core Web Vitals after implementation.

------------------------------------------------------------------------

# 26. Data Cleanup

Audit all current project and pricing data.

Specifically remove/update stale references such as:

-   Basic 150k
-   150k Tier
-   old Premium structure
-   old maintenance pricing
-   one-month free updates
-   stale add-ons
-   stale "2 Active Clients" or similar stats unless verified and
    intentionally maintained
-   unsupported agency comparison claims

Do not leave conflicting prices anywhere in the repository.

Search the entire repository, including:

-   components
-   data files
-   old routes
-   metadata
-   static HTML files that are still deployed
-   JSON/configuration
-   README where relevant

Do not accidentally expose obsolete pricing through alternate routes.

------------------------------------------------------------------------

# 27. Recommended Reusable Components

Refactor where useful into reusable components/data rather than
hardcoding everything into one file.

Potential structure:

-   `AudienceGateway`
-   `BusinessHero`
-   `RealClientWork`
-   `IndustryDemoFilter`
-   `CapabilityGrid`
-   `PackageCards`
-   `PackageComparison`
-   `PackageRecommender`
-   `MaintenanceOptions`
-   `Process`
-   `TrustSection`
-   `DeveloperHero`
-   `TechnicalSkills`
-   `TechnicalProjects`
-   `ExperienceTimeline`
-   `CVDownload`
-   `ContactCTA`

Store package/project information in clean data objects where practical.

------------------------------------------------------------------------

# 28. Important Business Logic

The four tiers are based on increasing **capability**, not merely better
visual design.

Internally understand them as:

-   Starter = Presence
-   Standard = Interaction
-   Business = Workflow
-   Advanced = Integration

Do not necessarily expose those internal labels as formal package names,
but let the UX communicate this progression.

A visually beautiful site can still be Starter.

A plain-looking site with stored customer data/integrations may require
Business or Advanced.

Never imply price is determined by how wealthy the client appears.

------------------------------------------------------------------------

# 29. Final QA Checklist

Before considering the work complete:

-   Verify `/`
-   Verify `/developer`
-   Verify `/links`
-   Verify mobile navigation
-   Verify all pricing
-   Verify package recommender logic
-   Verify project URLs
-   Verify real client/demo labels
-   Verify WhatsApp CTAs
-   Verify selected-package handoff
-   Verify contact form
-   Verify modals
-   Verify keyboard navigation
-   Verify reduced-motion behavior
-   Verify all external links
-   Verify no obsolete 150k package references remain
-   Verify no obsolete maintenance prices remain
-   Verify no "one month free updates" references remain
-   Verify Jopeem uses `https://jopeempharmacy.com`
-   Verify Levinah uses `https://www.levinahsalons.com`
-   Verify Stuwies, if displayed, is marked **Work in Progress** rather
    than completed client work
-   Verify no invented testimonials/results
-   Verify desktop and mobile layouts
-   Verify Lighthouse/performance/accessibility
-   Verify production build succeeds

------------------------------------------------------------------------

# 30. Implementation Philosophy

Do not redesign simply to make the site "look cooler."

Every visual and structural change should support at least one of:

-   clarity
-   credibility
-   conversion
-   easier package understanding
-   better project discovery
-   employer evaluation
-   mobile usability
-   accessibility
-   performance

The final product should communicate:

> **Solomon can build my business a professional website, but he can
> also go beyond a website and develop the workflows, ordering, booking,
> data and integrations my business needs.**

At the same time, an employer following the recruiter path should come
away thinking:

> **Solomon is not merely assembling attractive business pages; he has
> practical web/software engineering ability and can build structured
> digital systems.**

Keep those two messages separated by audience while preserving one
coherent personal brand.
