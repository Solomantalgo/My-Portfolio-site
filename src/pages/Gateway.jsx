import { ArrowRight, BriefcaseBusiness, Code2, Star, UserRound, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const destinations = [
  {
    className: 'client',
    label: 'Client / Business',
    title: 'I need a website or digital solution',
    description: 'Websites, booking, ordering and business systems.',
    to: '/business',
    Icon: BriefcaseBusiness,
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
    Icon: UserRound,
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
  return (
    <main className="gateway-page">
      <div className="gateway-atmosphere" aria-hidden="true" />
      <SEO title="Solomantalgo | Web & Systems Developer Kampala" description="Choose business services, Solomon's developer portfolio or direct contact." />

      <header className="gateway-header">
        <Link className="gateway-brand" to="/" aria-label="Solomantalgo home">
          <span className="gateway-brand-mark" aria-hidden="true">S</span>
          <span className="gateway-brand-name">Solomantalgo</span>
        </Link>
      </header>

      <div className="gateway-layout">
        <section className="gateway-welcome" aria-labelledby="choose-title">
          <p className="gateway-eyebrow"><span aria-hidden="true" />Welcome</p>
          <h1 id="choose-title">What brings<br className="gateway-heading-break" /> you <span>here?</span></h1>
          <p className="gateway-description">Choose where you’d like to go and<br className="gateway-desktop-break" /> I’ll take you there.</p>

          <ul className="gateway-benefits" aria-label="A few things to expect">
            {benefits.map((benefit) => <BenefitItem key={benefit.title} benefit={benefit} />)}
          </ul>
        </section>

        <div className="gateway-panel" role="navigation" aria-label="Choose your destination">
          {destinations.map((option) => <EntryOptionCard key={option.to} option={option} />)}
        </div>
      </div>
      <footer className="gateway-footer">
        <small>© {new Date().getFullYear()} Solomantalgo. All rights reserved.</small>
        <a href="https://github.com/solomantalgo" target="_blank" rel="noopener noreferrer" aria-label="Solomantalgo on GitHub (opens in a new tab)">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.3.1-.3.4-1.5-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 1.3 4.9 1.7 4.9 1.7c-.5 1.8-.2 3-.1 3.3-1 .8-1.5 1.9-1.5 3.3 0 5 2.9 6.2 6 6.5-1 .9-1.3 2.6-1.3 3.2V22" />
            <path d="M9 20c-5 1.5-5-2.5-7-3" />
          </svg>
        </a>
      </footer>
    </main>
  );
}
