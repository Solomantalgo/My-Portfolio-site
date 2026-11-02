import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, ArrowUp, ChevronDown, Code2, Menu, Rocket, Workflow, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import "../developer-hero.css";
import "../developer-featured-project.css";
import "../developer-project-link.css";
import "../developer-compact-project.css";
import "../developer-biteright-project.css";
import "../developer-more-projects.css";

const MotionNav = motion.nav;
const MotionSection = motion.section;
const MotionSmall = motion.small;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

const secondaryProjects = [
  {
    name: "Jopeem Pharmacy",
    type: "CLIENT PROJECT: PHARMACY & HEALTHCARE",
    description:
      "Responsive pharmacy experience for browsing product categories, understanding healthcare services, finding the appropriate branch and contacting the team.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/jopeem-website-preview.png",
    imageUrl: "jopeempharmacy.com",
    liveUrl: "https://jopeempharmacy.com",
    codeUrl: null,
  },
  {
    name: "Levinah Salons",
    type: "CLIENT PROJECT: SALON & BEAUTY",
    description:
      "Mobile-friendly salon presence combining services, prices, previous work, business information and WhatsApp booking.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/levinah-website-preview.png",
    imageUrl: "levinahsalons.com",
    liveUrl: "https://www.levinahsalons.com",
    codeUrl: null,
  },
  {
    name: "Stuwies Salon",
    type: "WORK IN PROGRESS: SALON & SPA",
    description:
      "An in-progress salon and spa product presenting services and supporting structured appointment requests and customer contact.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: null,
    status: "WORK IN PROGRESS",
    imageUrl: "",
    liveUrl: "https://stuwies-salon.vercel.app",
    codeUrl: null,
  },
];

function BrowserPreview({ image = null, title, address }) {
  if (!image) return (
    <figure className="developer-browser-preview developer-preview-placeholder" aria-label={`${title} screenshot unavailable`}>
      <div className="developer-browser-bar" aria-hidden="true"><span className="developer-browser-dots"><i /><i /><i /></span><span className="developer-browser-address">{title}</span></div>
      <div className="developer-preview-empty"><span>Live preview</span><strong>Screenshot unavailable</strong><small>Visit the project to explore the interface.</small></div>
    </figure>
  );
  const responsiveImage = image.includes("biteright")
    ? "/images/biteright-website-preview-640.webp 640w, /images/biteright-website-preview-960.webp 960w"
    : image.includes("jopeem")
      ? "/images/jopeem-website-preview-640.webp 640w, /images/jopeem-website-preview-960.webp 960w"
      : image.includes("levinah")
        ? "/images/levinah-website-preview-640.webp 640w, /images/levinah-website-preview-960.webp 960w"
        : undefined;
  const optimizedImage = image.replace("-preview.png", "-preview-960.webp");
  return (
    <figure className="developer-browser-preview" aria-label={`${title} website preview`}>
      <div className="developer-browser-bar" aria-hidden="true">
        <span className="developer-browser-dots"><i /><i /><i /></span>
        <span className="developer-browser-address">{address}</span>
      </div>
      <img src={responsiveImage ? optimizedImage : image} srcSet={responsiveImage} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 46vw, 560px" alt={`${title} website screenshot`} loading="lazy" decoding="async" width="1200" height="800" />
    </figure>
  );
}

function ProjectDetails({ title, children }) {
  const [desktop, setDesktop] = useState(() => window.matchMedia("(min-width: 901px)").matches);
  const [open, setOpen] = useState(() => window.matchMedia("(min-width: 901px)").matches);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const update = () => { setDesktop(media.matches); setOpen(media.matches); };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <div className="project-details-disclosure">
    <button type="button" className="project-details-toggle" aria-expanded={open} aria-label={`${open ? "Hide" : "Show"} ${title}`} onClick={() => setOpen((value) => !value)}>{open ? "Hide details" : "Details"}<ChevronDown className={open ? "is-open" : ""} size={16} aria-hidden="true" /></button>
    <AnimatePresence initial={false}>
      {(open || desktop) && <motion.div className="project-details-content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.28 }, opacity: { duration: 0.2 } }}>{children}</motion.div>}
    </AnimatePresence>
  </div>;
}

function trackCardGlow(event) {
  if (!window.matchMedia("(hover: hover)").matches) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
}

function clearCardGlow(event) {
  event.currentTarget.style.removeProperty("--mx");
  event.currentTarget.style.removeProperty("--my");
}

function BrandIcon({ name }) {
  const paths = {
    github: "M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.54 0-1.22.44-2.22 1.15-3-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.23 2.66.11 2.95.72.78 1.15 1.78 1.15 3 0 4.31-2.61 5.26-5.1 5.54.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z",
    linkedin: "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.44H4.98V9.5h2.95v8.94ZM6.46 8.28a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42Zm12 10.16h-2.94v-4.35c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.43H9.46V9.5h2.82v1.22h.04c.39-.7 1.35-1.45 2.78-1.45 2.98 0 3.53 1.96 3.53 4.5v4.67Z",
    whatsapp: "M12.04 2a9.85 9.85 0 0 0-8.5 14.83L2.2 22l5.31-1.39A9.95 9.95 0 1 0 12.04 2Zm0 18.1a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.15.82.84-3.07-.2-.32a8.2 8.2 0 1 1 6.98 3.89Zm4.5-6.14c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.11.25-.3.38-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.07-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.06.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.49-.61 1.7-1.2.2-.6.2-1.1.14-1.21-.06-.1-.23-.17-.48-.3Z",
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={paths[name]} /></svg>;
}

function SkillPill({ skill, index }) {
  const reduceMotion = useReducedMotion();
  return (
    <MotionSpan
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
    >
      {skill}
    </MotionSpan>
  );
}

export default function Developer() {
  const reduceMotion = useReducedMotion();
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const mobileFirstLinkRef = useRef(null);
  const menuButtonRef = useRef(null);
  const wasMenuOpen = useRef(false);
  const liveSiteCount = [
    { liveUrl: "https://kookee-cart.vercel.app" },
    { liveUrl: "https://biteright-restuarant.vercel.app/" },
    ...secondaryProjects,
  ].filter((project) => project.liveUrl && project.status !== "WORK IN PROGRESS").length;

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
      setIsScrolled(window.scrollY > 8);
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["projects", "skills", "background"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -64% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (mobileMenuOpen) {
      wasMenuOpen.current = true;
      const focusFirstLink = () => mobileFirstLinkRef.current?.focus({ preventScroll: true });
      focusFirstLink();
      const focusFrame = window.requestAnimationFrame(focusFirstLink);
      return () => window.cancelAnimationFrame(focusFrame);
    } else if (wasMenuOpen.current) {
      wasMenuOpen.current = false;
      menuButtonRef.current?.focus({ preventScroll: true });
    }
    return undefined;
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [mobileMenuOpen]);

  const sectionLink = (id, label, className = "", linkRef = null) => (
    <a
      ref={linkRef}
      className={className}
      href={`#${id}`}
      aria-current={activeSection === id ? "location" : undefined}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <MotionConfig reducedMotion="user">
    <div className="developer">
      <SEO
        title="Solomon Kisense | Web & Systems Developer"
        description="Developer portfolio of Solomon Kisense: React, JavaScript, practical web products and business systems."
      />
      <Helmet>
        <link rel="preload" as="image" href="/images/solomon-cutout-800.webp" imageSrcSet="/images/solomon-cutout-480.webp 480w, /images/solomon-cutout-800.webp 800w, /images/solomon-cutout-1254.webp 1254w" imageSizes="(max-width: 700px) 100vw, 52vw" fetchPriority="high" />
      </Helmet>
      <header id="top" ref={headerRef} className={`dev-header${isScrolled ? " is-scrolled" : ""}`}>
        <Link className="logo" to="/">
          <img src="/images/newlogo.png" srcSet="/images/newlogo-320.png 320w, /images/newlogo-640.png 640w" sizes="(max-width: 700px) 150px, 220px" alt="Solomantalgo" width="2172" height="724" decoding="async" />
        </Link>
        <nav className="dev-desktop-nav" aria-label="Developer page navigation">
          {sectionLink("skills", "Skills")}
          {sectionLink("projects", "Projects")}
          {sectionLink("background", "Background")}
          <Link to="/business">Business Services</Link>
        </nav>
        <button
          ref={menuButtonRef}
          className="dev-menu-toggle"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="developer-mobile-menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
        <span className="dev-scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollProgress})` }} />
        </span>
        <AnimatePresence>
          {mobileMenuOpen && (
            <MotionNav
              id="developer-mobile-menu"
              ref={mobileNavRef}
              className="dev-mobile-menu"
              aria-label="Developer page mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
              onKeyDown={(event) => {
                if (event.key !== "Tab") return;
                const links = [...event.currentTarget.querySelectorAll("a")];
                if (event.shiftKey && document.activeElement === links[0]) {
                  event.preventDefault();
                  links.at(-1)?.focus();
                } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
                  event.preventDefault();
                  links[0]?.focus();
                }
              }}
            >
              {sectionLink("skills", "Skills", "dev-menu-link", mobileFirstLinkRef)}
              {sectionLink("projects", "Projects", "dev-menu-link")}
              {sectionLink("background", "Background", "dev-menu-link")}
              <Link className="dev-menu-link" to="/business" onClick={() => setMobileMenuOpen(false)}>Business Services</Link>
              <a className="dev-menu-link dev-menu-cv" href="/Solomon-Kisense-CV.pdf" download onClick={() => setMobileMenuOpen(false)}>Download CV</a>
            </MotionNav>
          )}
        </AnimatePresence>
      </header>
      <main>
        <MotionSection className="dev-hero" initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05 } } }}>
          <div className="dev-hero-media">
            <img src="/images/solomon-cutout-800.webp" srcSet="/images/solomon-cutout-480.webp 480w, /images/solomon-cutout-800.webp 800w, /images/solomon-cutout-1254.webp 1254w" sizes="(max-width: 700px) 100vw, 52vw" width="1254" height="1254" alt="Portrait of Solomon against the blue-lit hero background" fetchPriority="high" decoding="async" />
          </div>
          <div className="dev-hero-copy">
          <MotionSmall variants={reduceMotion ? heroStatic : heroEntrance}>FOR EMPLOYERS &amp; RECRUITERS</MotionSmall>
          <MotionHeading variants={reduceMotion ? heroStatic : heroEntrance}>I’m <span>Solomon.</span> I build web and systems software.</MotionHeading>
          <MotionParagraph variants={reduceMotion ? heroStatic : heroEntrance}>Explore the projects I’ve built and contributed to, my technical skills, and my CV.</MotionParagraph>
          <MotionDiv className="actions" variants={reduceMotion ? heroStatic : heroEntrance}>
            <a className="dev-action-button dev-primary" href="/Solomon-Kisense-CV.pdf" download>
              Download CV <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
            <a className="dev-action-button dev-outline" href="#projects">
              View projects <ArrowRight size={17} aria-hidden="true" />
            </a>
          </MotionDiv>
          <MotionDiv className="developer-fact-strip" variants={reduceMotion ? heroStatic : heroEntrance}>
            <span>Final-year BSc IT · KIU</span><span>React · Node.js · IoT</span><span>{liveSiteCount} live client sites</span>
          </MotionDiv>
          </div>
        </MotionSection>
        <section id="projects" className="dev-projects">
          <small>SELECTED ENGINEERING WORK</small>
          <h2>Projects I've built and contributed to.</h2>
          <Reveal as="article" id="yaka-system" delay={0.04} className="featured-engineering-project developer-project-card" onPointerMove={trackCardGlow} onPointerLeave={clearCardGlow}>
            <b>01</b>
            <div className="yaka-architecture" role="img" aria-label="USSD connects through Africa's Talking to the Node.js backend, which uses SQLite. The ESP32 polls the backend over HTTP and receives responses.">
              <div className="yaka-flow-row yaka-flow-services"><span>USSD</span><i aria-hidden="true" /><span>Africa's Talking</span><i aria-hidden="true" /><span>Node.js backend</span><i aria-hidden="true" /><span>SQLite</span></div>
              <div className="yaka-flow-row yaka-flow-device"><span>ESP32</span><i aria-hidden="true"><b>HTTP polling</b></i><span>Node.js backend</span></div>
            </div>
            <div className="featured-project-body">
              <div className="featured-project-meta">
                <span>KIU FINAL-YEAR PROJECT</span>
                <span>5-PERSON TEAM</span>
              </div>
              <h3>Automated Yaka Token Entry System</h3>
              <div className="featured-project-type">
                IoT, backend and API integration
              </div>
              <p className="featured-project-summary">
                An IoT-based system designed to automate prepaid electricity
                token entry by connecting a Node.js backend, USSD workflow and
                ESP32 hardware.
              </p>
              <ProjectDetails title="Automated Yaka Token Entry System details">
              <div className="featured-project-breakdown">
                <section className="featured-project-detail">
                  <h4>MY ROLE</h4>
                  <p>
                    System architecture, ESP32 and firmware integration, Node.js
                    backend development, database/API integration, USSD
                    integration and connecting the hardware-software workflow.
                  </p>
                </section>
                <section className="featured-project-detail">
                  <h4>STACK</h4>
                  <ul className="featured-project-stack">
                    <li>ESP32</li>
                    <li>Node.js</li>
                    <li>SQLite</li>
                    <li>REST API</li>
                    <li>Africa's Talking</li>
                    <li>HTTP</li>
                  </ul>
                </section>
                <section className="featured-project-detail">
                  <h4>ENGINEERING CHALLENGE</h4>
                  <p>
                    Connecting a physical device with backend services and a
                    USSD-based workflow while keeping each component
                    synchronized through HTTP polling and shared data.
                  </p>
                </section>
              </div>
              </ProjectDetails>
              <a
                className="featured-project-link"
                href="https://github.com/Solomantalgo/ussd-electricity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Automated Yaka Token Entry System (opens in new tab)"
              >
                View Code
              </a>
            </div>
          </Reveal>
          <Reveal as="article" delay={0.08} id="kookee-cart" className="compact-engineering-project developer-project-card" onPointerMove={trackCardGlow} onPointerLeave={clearCardGlow}>
            <b>02</b>
            <div className="compact-project-body">
              <div className="compact-project-meta">
                PROFESSIONAL PROJECT: KOOKEE ENTERPRISES
              </div>
              <h3>Kookee Cart</h3>
              <BrowserPreview image={null} title="Kookee Cart" address="" />
              <p className="compact-project-summary">
                React ecommerce platform built and deployed for Kookee
                Enterprises and integrated with the company's existing WordPress
                website.
              </p>
              <ProjectDetails title="Kookee Cart details">
              <div className="compact-project-details">
                <div className="compact-project-detail">
                  <h4>MY ROLE</h4>
                  <p>
                    As the sole developer, I handled application development,
                    business-requirement implementation, website integration,
                    deployment, maintenance and iteration.
                  </p>
                </div>
                <div className="compact-project-detail">
                  <h4>STACK</h4>
                  <ul className="compact-project-stack">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Vite</li>
                    <li>Git/GitHub</li>
                    <li>Vercel</li>
                  </ul>
                </div>
              </div>
              </ProjectDetails>
              <div className="compact-project-actions">
                <a
                  href="https://kookee-cart.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Solomantalgo/kookee-cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View code for Kookee Cart (opens in new tab)"
                >
                  View Code
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal as="article" delay={0.12} id="biteright-ordering" className="compact-engineering-project developer-project-card" onPointerMove={trackCardGlow} onPointerLeave={clearCardGlow}>
            <b>03</b>
            <div className="compact-project-body">
              <div className="compact-project-meta">
                CLIENT PROJECT: RESTAURANT ORDERING
              </div>
              <BrowserPreview image="/images/biteright-website-preview.png" title="BiteRight Ordering Experience" address="biteright-restuarant.vercel.app" />
              <h3>BiteRight Ordering Experience</h3>
              <p className="compact-project-summary">
                A responsive ordering experience that lets customers browse the
                restaurant menu, select items and quantities, and prepare a
                structured order for WhatsApp handoff.
              </p>
              <ProjectDetails title="BiteRight project details">
              <div className="compact-project-details">
                <div className="compact-project-detail">
                  <h4>MY ROLE</h4>
                  <p>
                    Built the customer ordering flow, menu interactions,
                    quantity handling, location and order workflow, analytics
                    integration, business-data workflow and deployment.
                  </p>
                </div>
                <div className="compact-project-detail">
                  <h4>STACK</h4>
                  <ul className="compact-project-stack">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Apps Script</li>
                    <li>GA4</li>
                    <li>Vercel</li>
                  </ul>
                </div>
              </div>
              </ProjectDetails>
              <div className="compact-project-workflow">
                <b>WORKFLOW</b>Customers select menu items and quantities, enter
                their details, then send the order through WhatsApp.
              </div>
              <div className="compact-project-actions">
                <a
                  href="https://biteright-restuarant.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </Reveal>
          <div className="more-projects-toggle-wrap">
            <button
              type="button"
              className="more-projects-toggle"
              aria-expanded={showMoreProjects}
              aria-controls="more-shipped-work"
              onClick={() => setShowMoreProjects((open) => !open)}
            >
              <span>{showMoreProjects ? "Show Less" : "View More Projects"}</span>
              <ChevronDown className={showMoreProjects ? "is-open" : ""} size={17} aria-hidden="true" />
            </button>
          </div>
          <AnimatePresence initial={false}>
          {showMoreProjects && (
            <motion.div className="more-projects-panel" id="more-shipped-work" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.22 } }}>
              <div className="more-projects-intro">
                <small>MORE SHIPPED WORK</small>
                <h3>Other products and client work.</h3>
                <p>
                  A selection of websites and digital products I've designed,
                  built and deployed for real businesses.
                </p>
              </div>
              <div className="secondary-project-grid">
                {secondaryProjects.map((project, index) => (
                  <Reveal
                    as="article"
                    delay={index * 0.07}
                    className="secondary-project-card"
                    key={project.name}
                    onPointerMove={trackCardGlow}
                    onPointerLeave={clearCardGlow}
                  >
                    <BrowserPreview image={project.image} title={project.name} address={project.imageUrl} />
                    <small>{project.type}</small>
                    {project.status && <span className="project-status">{project.status}</span>}
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    {project.stack.length > 0 && (
                      <ul
                        className="secondary-project-stack"
                        aria-label={project.name + " technologies"}
                      >
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <div className="secondary-project-actions">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site
                      </a>
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </section>
        <section id="skills">
          <small>TECHNICAL SUMMARY</small>
          <h2>Core skills</h2>
          <div className="skill-grid">
            <Reveal as="article" delay={0} className="skill-card">
              <Code2 size={22} aria-hidden="true" />
              <h3>Frontend engineering</h3>
              <p>
                React, JavaScript, HTML, CSS, responsive layouts and accessible
                interaction design.
              </p>
              <div className="skill-seen-in">Seen in: <a href="#biteright-ordering">BiteRight</a> and <a href="#kookee-cart">Kookee Cart</a></div>
            </Reveal>
            <Reveal as="article" delay={0.08} className="skill-card">
              <Workflow size={22} aria-hidden="true" />
              <h3>Systems thinking</h3>
              <p>
                Data capture, ordering and booking flows, state handling and
                third-party service integration.
              </p>
              <div className="skill-seen-in">Seen in: <a href="#yaka-system">Automated Yaka</a> and <a href="#kookee-cart">Kookee Cart</a></div>
            </Reveal>
            <Reveal as="article" delay={0.16} className="skill-card">
              <Rocket size={22} aria-hidden="true" />
              <h3>Delivery</h3>
              <p>
                Requirements translation, iterative review, deployment, domains
                and production-minded performance.
              </p>
              <div className="skill-seen-in">Seen in: <a href="#kookee-cart">Kookee Cart</a> and <a href="#biteright-ordering">BiteRight</a></div>
            </Reveal>
          </div>
          <div className="skill-categories">
            {[
              ["Frontend", ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI"]],
              ["Backend & Integration", ["Node.js", "SQLite", "REST/API integration", "Africa’s Talking USSD", "Google Apps Script"]],
              ["Hardware", ["ESP32"]],
              ["Tooling & Delivery", ["Vite", "Git/GitHub", "Vercel", "GA4"]],
            ].map(([category, skills], categoryIndex) => (
              <Reveal as="section" delay={categoryIndex * 0.05} className="skill-category" key={category}>
                <h3>{category}</h3>
                <div className="stack">
                  {skills.map((skill, index) => (
                    <SkillPill key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="background" className="dev-background">
          <Reveal className="dev-background-intro">
            <small>BACKGROUND</small>
            <h2>Developer with a business-outcome mindset.</h2>
          </Reveal>
          <div className="developer-timeline">
            <MotionSpan
              className="developer-timeline-line"
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={reduceMotion ? undefined : { scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <Reveal as="article" delay={0.05} className="developer-timeline-item">
              <span className="developer-timeline-dot" aria-hidden="true" />
              <div>
                <h3>Education</h3>
                <p>
                  I am in my final year of the BSc Information Technology programme
                  at Kampala International University.
                </p>
              </div>
            </Reveal>
            <Reveal as="article" delay={0.15} className="developer-timeline-item">
              <span className="developer-timeline-dot" aria-hidden="true" />
              <div>
                <h3>Independent project work</h3>
                <p>
                  Designing, developing and deploying websites and workflow
                  experiences for local businesses, with direct responsibility for
                  requirements, implementation and client communication.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <Reveal as="section" className="developer-opportunity-cta">
          <small>EMPLOYER / RECRUITER</small>
          <h2>
            <img className="developer-cta-avatar" src="/images/solomon-cutout-480.webp" srcSet="/images/solomon-cutout-480.webp 480w, /images/solomon-cutout-800.webp 800w" sizes="(max-width: 700px) 68px, 92px" width="1254" height="1254" alt="Solomon Kisense" />
            Looking for a developer who can connect engineering work to real
            user needs?
          </h2>
          <a
            className="dev-action-button dev-primary"
            href="mailto:kmantalgosolo@gmail.com?subject=Developer opportunity"
          >
            Discuss an Opportunity
          </a>
          <div className="developer-social-actions" role="group" aria-label="More ways to connect">
            <a href="/Solomon-Kisense-CV.pdf" download aria-label="Download CV">
              <ArrowDownToLine size={18} aria-hidden="true" /><span>Download CV</span>
            </a>
            <a href="https://github.com/solomantalgo" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
              <BrandIcon name="github" /><span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/kisense-solomon-015336325" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">
              <BrandIcon name="linkedin" /><span>LinkedIn</span>
            </a>
            <a href="https://wa.me/256775224728" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Solomon (opens in new tab)">
              <BrandIcon name="whatsapp" /><span>WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </main>
      <footer>
        <Link className="logo" to="/" aria-label="Solomantalgo home">
          <img src="/images/newlogo.png" srcSet="/images/newlogo-320.png 320w, /images/newlogo-640.png 640w" sizes="(max-width: 700px) 150px, 220px" alt="Solomantalgo" width="2172" height="724" decoding="async" />
        </Link>
        <nav className="dev-footer-links" aria-label="Footer navigation">
          <a href="https://github.com/solomantalgo" target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link to="/business">Business Services</Link>
          <a href="#top"><ArrowUp size={14} aria-hidden="true" /> Back to top</a>
        </nav>
        <small>© {new Date().getFullYear()} Solomon Kisense</small>
      </footer>
    </div>
    </MotionConfig>
  );
}

const heroEntrance = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

const heroStatic = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};
