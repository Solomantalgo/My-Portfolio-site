import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowLeft,
  Cake,
  Camera,
  ChevronDown,
  Dumbbell,
  ExternalLink,
  Gem,
  Globe,
  Heart,
  Hotel,
  Scissors,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Utensils
} from 'lucide-react';
import { projects } from '../data/projects';

const iconMap = {
  bakery: Cake,
  beauty: Scissors,
  bridal: Globe,
  fashion: ShoppingBag,
  fitness: Dumbbell,
  fmcg: ShoppingCart,
  healthcare: Stethoscope,
  hotel: Hotel,
  jewellery: Gem,
  laundry: Shirt,
  makeup: Sparkles,
  nails: Sparkles,
  photography: Camera,
  restaurant: Utensils,
  spa: Heart
};

const projectIcon = (project) => {
  const key = project.industry.toLowerCase();
  if (key.includes('bakery')) return 'bakery';
  if (key.includes('beauty')) return 'beauty';
  if (key.includes('bridal')) return 'bridal';
  if (key.includes('fashion')) return 'fashion';
  if (key.includes('fitness')) return 'fitness';
  if (key.includes('fmcg')) return 'fmcg';
  if (key.includes('health')) return 'healthcare';
  if (key.includes('hotel')) return 'hotel';
  if (key.includes('jewellery')) return 'jewellery';
  if (key.includes('laundry')) return 'laundry';
  if (key.includes('makeup')) return 'makeup';
  if (key.includes('nails')) return 'nails';
  if (key.includes('photo')) return 'photography';
  if (key.includes('restaurant')) return 'restaurant';
  if (key.includes('spa')) return 'spa';
  return 'fmcg';
};

const groupBy = (items, key) => {
  const grouped = items.reduce((acc, item) => {
    acc[item[key]] = [...(acc[item[key]] || []), item];
    return acc;
  }, {});

  return Object.keys(grouped).sort().map((group) => ({ category: group, items: grouped[group] }));
};

const LinkCard = ({ item }) => {
  const Icon = iconMap[projectIcon(item)] || Globe;

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-card">
      <div className="link-icon"><Icon size={18} /></div>
      <div style={{ flex: 1 }}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span>{item.live ? 'Live client' : item.tier} / {item.industry}</span>
      </div>
      <ExternalLink size={16} className="link-out-icon" />
    </a>
  );
};

const LinkSection = ({ title, sections, defaultOpen = false }) => {
  const [openGroups, setOpenGroups] = useState(() => new Set(defaultOpen ? sections.map((section) => section.category) : []));

  const toggleGroup = (category) => {
    setOpenGroups((current) => {
      const next = new Set(current);
      next.has(category) ? next.delete(category) : next.add(category);
      return next;
    });
  };

  return (
    <section className="links-directory-section">
      <h2>{title}</h2>
      <div className="links-accordion-list">
        {sections.map((section) => {
          const isOpen = openGroups.has(section.category);
          return (
            <div key={section.category} className="links-accordion">
              <button type="button" onClick={() => toggleGroup(section.category)} aria-expanded={isOpen}>
                <span>{section.category}</span>
                <small>{section.items.length} {section.items.length === 1 ? 'site' : 'sites'}</small>
                <ChevronDown size={18} />
              </button>
              {isOpen && (
                <div className="links-panel">
                  {section.items.map((item) => <LinkCard key={`${section.category}-${item.title}`} item={item} />)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const LinksPage = () => {
  const clientLinks = useMemo(() => [{ category: 'Live Client Sites', items: projects.filter((item) => item.live) }], []);
  const byIndustry = useMemo(() => groupBy(projects, 'industry'), []);

  return (
    <div className="links-page">
      <SEO
        title="Links | Solomon Talgo - Web Developer Portfolio"
        description="Access all of Solomon Talgo's live client sites and industry demos grouped by business category."
        canonicalUrl="https://solomantalgo.com/links"
        ogTitle="Direct Links | Solomon Talgo - Web Developer Portfolio"
        ogDescription="Check out all live client websites and interactive industry demos built by Kisense Solomon."
        ogUrl="https://solomantalgo.com/links"
      />

      <div className="links-container">
        <Link to="/" className="links-back"><ArrowLeft size={16} /> Back to Portfolio</Link>

        <header className="links-hero">
          <div className="links-mark"><Globe size={30} /></div>
          <h1>Direct <span>Links</span></h1>
          <p>Browse live client work and demo sites by budget tier or business industry.</p>
        </header>

        <LinkSection title="Client Work" sections={clientLinks} defaultOpen />
        <LinkSection title="Demos By Industry" sections={byIndustry} />

        <footer className="links-footer">
          <p>&copy; {new Date().getFullYear()} Solomon Talgo. Built with care in Kampala.</p>
        </footer>
      </div>
    </div>
  );
};

export default LinksPage;
