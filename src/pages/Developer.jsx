import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import "../developer-hero.css";
import "../developer-featured-project.css";
import "../developer-project-link.css";
import "../developer-compact-project.css";
import "../developer-biteright-project.css";
import "../developer-more-projects.css";
import "../developer-polish.css";

const MotionNav = motion.nav;
const MotionSection = motion.section;
const MotionSmall = motion.small;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;
const MotionDiv = motion.div;

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
  if (!image) return null;
  return (
    <figure className="developer-browser-preview" aria-label={`${title} website preview`}>
      <div className="developer-browser-bar" aria-hidden="true">
        <span className="developer-browser-dots"><i /><i /><i /></span>
        <span className="developer-browser-address">{address}</span>
      </div>
      <img src={image} alt={`${title} website screenshot`} loading="lazy" decoding="async" width="1200" height="800" />
    </figure>
  );
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

export default function Developer() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);
  const wasMenuOpen = useRef(false);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      wasMenuOpen.current = true;
      mobileNavRef.current?.querySelector("a")?.focus({ preventScroll: true });
    } else if (wasMenuOpen.current) {
      wasMenuOpen.current = false;
      menuButtonRef.current?.focus({ preventScroll: true });
    }
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

  const sectionLink = (id, label, className = "") => (
    <a
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
      <header ref={headerRef} className={`dev-header${isScrolled ? " is-scrolled" : ""}`}>
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              {sectionLink("skills", "Skills", "dev-menu-link")}
              {sectionLink("projects", "Projects", "dev-menu-link")}
              {sectionLink("background", "Background", "dev-menu-link")}
              <Link className="dev-menu-link" to="/business" onClick={() => setMobileMenuOpen(false)}>Business Services</Link>
              <a className="dev-menu-link dev-menu-cv" href="/Solomon-Kisense-CV.pdf" download onClick={() => setMobileMenuOpen(false)}>Download CV</a>
            </MotionNav>
          )}
        </AnimatePresence>
      </header>
      <main>
        <MotionSection
          className="dev-hero"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          <MotionSmall variants={heroEntrance}>FOR EMPLOYERS &amp; RECRUITERS</MotionSmall>
          <MotionHeading variants={heroEntrance}>I’m Solomon. I build web and systems software.</MotionHeading>
          <MotionParagraph variants={heroEntrance}>
            Explore the projects I’ve built and contributed to, my technical
            skills, and my CV.
          </MotionParagraph>
          <MotionDiv className="actions" variants={heroEntrance}>
            <a className="button blue" href="/Solomon-Kisense-CV.pdf" download>
              Download CV <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
            <a className="button outline" href="#projects">
              View projects <ArrowRight size={17} aria-hidden="true" />
            </a>
          </MotionDiv>
        </MotionSection>
        <section id="projects" className="dev-projects">
          <small>SELECTED ENGINEERING WORK</small>
          <h2>Projects I've built and contributed to.</h2>
          <Reveal as="article" delay={0.04} className="featured-engineering-project developer-project-card" onPointerMove={trackCardGlow} onPointerLeave={clearCardGlow}>
            <b>01</b>
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
              <div className="yaka-architecture" role="img" aria-label="USSD connects through Africa's Talking to the Node.js backend, which uses SQLite. The ESP32 polls the backend over HTTP and receives responses.">
                <div className="yaka-flow-row yaka-flow-services">
                  <span>USSD</span><i aria-hidden="true" /><span>Africa’s Talking</span><i aria-hidden="true" /><span>Node.js backend</span><i aria-hidden="true" /><span>SQLite</span>
                </div>
                <div className="yaka-flow-row yaka-flow-device">
                  <span>ESP32</span><i aria-hidden="true"><b>HTTP polling</b></i><span>Node.js backend</span>
                </div>
              </div>
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
              <a
                className="featured-project-link"
                href="https://github.com/Solomantalgo/ussd-electricity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code for Automated Yaka Token Entry System (opens in new tab)"
              >
                View Code ↗
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
              <div className="compact-project-actions">
                <a
                  href="https://kookee-cart.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site ↗
                </a>
                <a
                  href="https://github.com/Solomantalgo/kookee-cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View code for Kookee Cart (opens in new tab)"
                >
                  View Code ↗
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
                  Live Site ↗
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
                        Live Site ↗
                      </a>
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code ↗
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
            <article>
              <h3>Frontend engineering</h3>
              <p>
                React, JavaScript, HTML, CSS, responsive layouts and accessible
                interaction design.
              </p>
            </article>
            <article>
              <h3>Systems thinking</h3>
              <p>
                Data capture, ordering and booking flows, state handling and
                third-party service integration.
              </p>
            </article>
            <article>
              <h3>Delivery</h3>
              <p>
                Requirements translation, iterative review, deployment, domains
                and production-minded performance.
              </p>
            </article>
          </div>
          <div className="stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Vite</span>
            <span>Git</span>
            <span>Responsive UI</span>
            <span>REST/API integration</span>
          </div>
        </section><section id="background" className="background">
          <div>
            <small>BACKGROUND</small>
            <h2>Developer with a business-outcome mindset.</h2>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              I am in my final year of the BSc Information Technology programme
              at Kampala International University.
            </p>
            <h3>Independent project work</h3>
            <p>
              Designing, developing and deploying websites and workflow
              experiences for local businesses, with direct responsibility for
              requirements, implementation and client communication.
            </p>
          </div>
        </section>
        <section className="dev-cta">
          <small>EMPLOYER / RECRUITER</small>
          <h2>
            Looking for a developer who can connect engineering work to real
            user needs?
          </h2>
          <a
            className="button blue"
            href="mailto:kmantalgosolo@gmail.com?subject=Developer opportunity"
          >
            Discuss an Opportunity
          </a>
        </section>
      </main>
      <footer>
        <Link className="logo" to="/" aria-label="Solomantalgo home">
          <img src="/images/newlogo.png" srcSet="/images/newlogo-320.png 320w, /images/newlogo-640.png 640w" sizes="(max-width: 700px) 150px, 220px" alt="Solomantalgo" width="2172" height="724" decoding="async" />
        </Link>
        <a href="https://github.com/solomantalgo">GitHub</a>
        <Link to="/business">Business Services</Link>
      </footer>
    </div>
    </MotionConfig>
  );
}

const heroEntrance = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};
