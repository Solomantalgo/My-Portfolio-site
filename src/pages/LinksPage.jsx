import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ExternalLink, ArrowLeft, Globe, ShoppingCart, Utensils, Stethoscope, Scissors, Shirt, Heart, Hotel, Cake, ShoppingBag, Dumbbell, Gem, Sparkles, Camera } from 'lucide-react';

const links = [
  {
    category: "Live Client Sites",
    items: [
      {
        name: "Kookee Cart",
        url: "https://kookee-cart.vercel.app/",
        desc: "Ice Cream Maker (Kooksy) & FMCG Distributor",
        icon: <ShoppingCart size={18} />,
        color: "#AAFF3E"
      },
      {
        name: "Bite Right Restaurant",
        url: "https://biteright-restuarant.vercel.app/",
        desc: "Real-time menu & ordering system",
        icon: <Utensils size={18} />,
        color: "#AAFF3E"
      }
    ]
  },
  {
    category: "Industry Demo Sites",
    items: [
      {
        name: "LifeCare Spa & Hotel",
        url: "https://life-care-demo.solomantalgo.com/",
        desc: "Luxury wellness, spa & hospitality demo",
        icon: <Heart size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Grand Heights Hotel & Spa",
        url: "https://hotels-and-spa.solomantalgo.com/",
        desc: "Luxury hospitality & booking demo",
        icon: <Hotel size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "The Gourmet Restaurant",
        url: "https://restaurant-demo.solomantalgo.com/",
        desc: "Fine dining & reservation demo",
        icon: <Utensils size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Golden Crust Bakery",
        url: "https://bakery-demo.solomantalgo.com/",
        desc: "Artisan bakery & custom order demo",
        icon: <Cake size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Vogue Fashion Boutique",
        url: "https://fashion-demo.solomantalgo.com/",
        desc: "Modern apparel & clothing store demo",
        icon: <ShoppingBag size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Apex Fitness Gym",
        url: "https://gym-demo.solomantalgo.com/",
        desc: "Gym memberships & trainer schedule demo",
        icon: <Dumbbell size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Aurum Jewellery Studio",
        url: "https://jewellery-demo.solomantalgo.com/",
        desc: "Luxury jewelry collection & catalog demo",
        icon: <Gem size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Lifecare Medical Centre",
        url: "https://clinic-demo.solomantalgo.com/",
        desc: "Health clinic & appointment demo",
        icon: <Stethoscope size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "PressedUG Laundry",
        url: "https://laundry-demo.solomantalgo.com/",
        desc: "Laundry pickup & delivery demo",
        icon: <Shirt size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Ivory Bridal Studio",
        url: "https://bridal-demo.solomantalgo.com/",
        desc: "Luxury bridal & consultation demo",
        icon: <Globe size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Zuri Beauty Studio",
        url: "https://saloon-demo.solomantalgo.com/",
        desc: "Beauty salon & gallery demo",
        icon: <Scissors size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Luxe Nails & Spa",
        url: "https://nails-demo.solomantalgo.com/",
        desc: "Nail salon services & appointment booking demo",
        icon: <Sparkles size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Focus Photography Studio",
        url: "https://photography-demo.solomantalgo.com/",
        desc: "Creative photo gallery & photoshoot booking demo",
        icon: <Camera size={18} />,
        color: "#3B6FFF"
      },
      {
        name: "Glow Makeup Artistry",
        url: "https://makeup-demo.solomantalgo.com/",
        desc: "Bridal packages & makeup consultation demo",
        icon: <Sparkles size={18} />,
        color: "#3B6FFF"
      }
    ]
  }
];

const LinksPage = () => {
  return (
    <div className="links-page" style={{ 
      minHeight: '100vh', 
      background: 'var(--bg)', 
      padding: '4rem 1.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      <SEO title="Links | Solomon Talgo - Web Developer Portfolio" />
      
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: 'var(--muted)', 
          textDecoration: 'none', 
          fontSize: '0.85rem',
          marginBottom: '2.5rem',
          transition: 'color 0.2s'
        }} className="hover:text-lime">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '20px', 
            background: 'var(--card)', 
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem'
          }}>
            🚀
          </div>
          <h1 style={{ 
            fontFamily: 'var(--font-h)', 
            fontSize: '1.8rem', 
            fontWeight: 800,
            marginBottom: '0.5rem'
          }}>Direct <span style={{ color: 'var(--lime)' }}>Links</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Access all my live projects and industry demos in one place.</p>
        </header>

        <div className="links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {links.map((section, idx) => (
            <section key={idx}>
              <h2 style={{ 
                fontSize: '0.65rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                color: 'var(--lime)',
                marginBottom: '1rem',
                opacity: 0.8
              }}>{section.category}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {section.items.map((link, lIdx) => (
                  <a 
                    key={lIdx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-card"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border2)',
                      padding: '1.2rem',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `rgba(170, 255, 62, 0.05)`,
                      border: '1px solid rgba(170, 255, 62, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--lime)',
                      flexShrink: 0
                    }}>
                      {link.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.1rem' }}>{link.name}</h3>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 300 }}>{link.desc}</p>
                    </div>
                    <ExternalLink size={16} style={{ color: 'rgba(255,255,255,0.2)' }} />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer style={{ marginTop: '4rem', textAlign: 'center', borderTop: 'none' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Solomon Talgo. Built with ❤️ in Kampala.
          </p>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .link-card:hover {
          transform: scale(1.02);
          border-color: rgba(170, 255, 62, 0.3);
          background: var(--card2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .link-card:hover h3 {
          color: var(--lime);
        }
        .link-card:hover svg {
          color: var(--lime) !important;
        }
      `}} />
    </div>
  );
};

export default LinksPage;
