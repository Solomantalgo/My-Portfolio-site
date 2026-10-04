import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Menu, Star, UserRound, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function BusinessIcon({ size, strokeWidth }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></svg>;
}

function ProfileIcon({ size, strokeWidth }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6.5" r="3.5" /><path d="M4 21v-2a8 6 0 0 1 16 0v2Z" /></svg>;
}

const destinations = [
  {
    className: 'client',
    label: 'Client / Business',
    title: 'I need a website or digital solution',
    description: 'Websites, booking, ordering and business systems.',
    to: '/business',
    Icon: BusinessIcon,
  },
  {
    className: 'employer',
    label: 'Employer / Recruiter',
    title: "I'm an employer or recruiter",
    description: 'Technical work, projects, experience and CV.',
    to: '/developer',
    Icon: Code2,
  },
  {
    className: 'personal',
    label: 'Personal',
    title: "I'm looking for Solomon",
    description: 'Social profiles and direct contact.',
    to: '/connect',
    Icon: ProfileIcon,
  },
];

const benefits = [
  { title: 'Fast access', description: 'Get to the right section quickly', Icon: Zap },
  { title: 'Tailored experience', description: "See what's relevant to you", Icon: UserRound },
  { title: 'Same portfolio', description: 'Different entry points', Icon: Star },
];

function EntryOptionCard({ option }) {
  const { className, label, title, description, to, Icon } = option;

  return (
    <Link className={`gateway-card ${className}`} to={to}>
      <span className="gateway-card-icon" aria-hidden="true"><Icon size={27} strokeWidth={2} /></span>
      <span className="gateway-card-copy">
        <span className="gateway-card-label">{label}</span>
        <span className="gateway-card-title">{title}</span>
        <span className="gateway-card-description">{description}</span>
      </span>
      <span className="gateway-card-arrow" aria-hidden="true"><ArrowRight size={19} strokeWidth={2} /></span>
    </Link>
  );
}

function BenefitItem({ benefit }) {
  const { title, description, Icon } = benefit;

  return (
    <li className="gateway-benefit">
      <span className="gateway-benefit-icon" aria-hidden="true"><Icon size={20} strokeWidth={2} /></span>
      <span className="gateway-benefit-copy"><strong>{title}</strong><small>{description}</small></span>
    </li>
  );
}

export default function Gateway() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    const handlePointerDown = (event) => menuRef.current && !menuRef.current.contains(event.target) && setMenuOpen(false);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); document.removeEventListener('pointerdown', handlePointerDown); };
  }, []);

  return (
    <main className="gateway-page">
      <div className="gateway-atmosphere" aria-hidden="true" />
      <SEO title="Solomantalgo | Web & Systems Developer Kampala" description="Choose business services, Solomon's developer portfolio or direct contact." />

      <header className="gateway-header">
        <Link className="gateway-brand" to="/" aria-label="Solomantalgo home">
          <span className="gateway-brand-mark" aria-hidden="true">S</span>
          <span className="gateway-brand-name">Solomantalgo</span>
        </Link>
        <div className="gateway-menu-wrap" ref={menuRef}>
          <button className="gateway-menu-button" type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="gateway-menu" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
          {menuOpen && <nav className="gateway-menu" id="gateway-menu" aria-label="Gateway navigation">
            <Link to="/business">Business</Link>
            <Link to="/developer">Employer / Developer</Link>
            <Link to="/connect">Connect</Link>
          </nav>}
        </div>
      </header>

      <div className="gateway-layout">
        <section className="gateway-welcome" aria-labelledby="choose-title">
          <p className="gateway-eyebrow"><span aria-hidden="true" />Welcome</p>
          <h1 id="choose-title">What brings<br className="gateway-heading-break" /> you <span>here?</span></h1>
          <p className="gateway-description">Choose where you&apos;d like to go and<br className="gateway-desktop-break" /> I&apos;ll take you there.</p>

          <ul className="gateway-benefits" aria-label="A few things to expect">
            {benefits.map((benefit) => <BenefitItem key={benefit.title} benefit={benefit} />)}
          </ul>
        </section>

        <div className="gateway-panel" role="navigation" aria-label="Choose your destination">
          {destinations.map((option) => <EntryOptionCard key={option.to} option={option} />)}
        </div>
      </div>
      <footer className="gateway-footer">
        <small>Copyright {new Date().getFullYear()} Solomantalgo. All rights reserved.</small>
        <a href="https://github.com/solomantalgo" target="_blank" rel="noopener noreferrer" aria-label="Solomantalgo on GitHub (opens in a new tab)">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path fill="currentColor" stroke="none" d="M12 2.1c-5.1 0-9.2 4.1-9.2 9.2 0 4.1 2.7 7.6 6.5 8.8.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.1-3.3-1.1-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.6.9.6 1.8v2.7c0 .3.2.6.7.5 3.8-1.3 6.5-4.8 6.5-8.8 0-5.1-4.1-9.2-9.2-9.2Z" />
          </svg>
        </a>
      </footer>
    </main>
  );
}
