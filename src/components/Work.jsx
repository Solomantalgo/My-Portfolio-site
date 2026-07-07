const projects = [
  {
    title: "Kookee Cart",
    status: "LIVE CLIENT ✓",
    desc: "A distribution powerhouse for FMCG products and official maker of Kooksy Ice Cream. Features a custom catalog & ordering platform.",
    stack: ["FMCG", "Ice Cream", "Distribution"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://kookee-cart.vercel.app/"
  },
  {
    title: "Bite Right Restaurant",
    status: "LIVE CLIENT ✓",
    desc: "A modern menu & ordering site for a real restaurant. Syncs with Google Sheets for real-time price updates.",
    stack: ["Restaurant", "API Sync", "Dark Theme"],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://biteright-restuarant.vercel.app/"
  },
  {
    title: "Grand Heights Hotel",
    status: "LIVE DEMO",
    desc: "Luxury hospitality site with room galleries, amenities showcase, and booking inquiry system.",
    stack: ["Hotel", "Luxury", "Gold Theme"],
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://hotels-and-spa.solomantalgo.com/"
  },
  {
    title: "Lifecare Medical Centre",
    status: "LIVE DEMO",
    desc: "Modern health clinic with doctors section, appointment booking and emergency contact strip.",
    stack: ["Hospital", "Doctors Grid", "Navy Theme"],
    image: "/images/medical.png",
    url: "https://clinic-demo.solomantalgo.online"
  },
  {
    title: "The Gourmet Restaurant",
    status: "LIVE DEMO",
    desc: "Fine dining restaurant demo with elegant layout, digital menu, and reservation form.",
    stack: ["Dining", "Reservations", "Elegant"],
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://restaurant-demo.solomantalgo.com/"
  },
  {
    title: "Zuri Beauty Studio",
    status: "LIVE DEMO",
    desc: "Luxury beauty salon with African images, gold theme, gallery and booking form.",
    stack: ["Beauty", "Gold Theme", "Slideshow"],
    image: "/images/saloon.png",
    url: "https://saloon-demo.solomantalgo.com"
  },
  {
    title: "PressedUG Laundry",
    status: "LIVE DEMO",
    desc: "Laundry and dry cleaning with pickup booking form and free delivery pitch.",
    stack: ["Laundry", "Booking Form", "Blue Theme"],
    image: "https://images.pexels.com/photos/7282378/pexels-photo-7282378.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://laundry-demo.solomantalgo.com"
  },
  {
    title: "Ivory Bridal Studio",
    status: "LIVE DEMO",
    desc: "Rose and cream editorial luxury bridal site with gallery and consultation form.",
    stack: ["Bridal", "Luxury", "Rose Theme"],
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://bridal-demo.solomantalgo.com"
  },
  {
    title: "LifeCare Spa & Hotel",
    status: "LIVE DEMO",
    desc: "Premium wellness retreat demo featuring luxury spa treatments, hotel rooms, and wellness packages.",
    stack: ["Spa", "Wellness", "Hotel"],
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://life-care-demo.solomantalgo.com/"
  },
  {
    title: "Golden Crust Bakery",
    status: "LIVE DEMO",
    desc: "Artisan bakery demo featuring fresh breads, cakes, pastry menus, and custom order forms.",
    stack: ["Bakery", "Order Form", "Warm Theme"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80",
    url: "https://bakery-demo.solomantalgo.com"
  },
  {
    title: "Vogue Fashion Boutique",
    status: "LIVE DEMO",
    desc: "Modern apparel and clothing store demo featuring collection displays and integrated lookbooks.",
    stack: ["Fashion", "Lookbook", "Modern Layout"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
    url: "https://fashion-demo.solomantalgo.com/"
  },
  {
    title: "Apex Fitness Gym",
    status: "LIVE DEMO",
    desc: "Dynamic fitness studio website with class schedules, trainer grids, and membership options.",
    stack: ["Gym", "Schedules", "Dark Theme"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80",
    url: "https://gym-demo.solomantalgo.com/"
  },
  {
    title: "Aurum Jewellery Studio",
    status: "LIVE DEMO",
    desc: "High-end jewelry showroom showcasing engagement rings, luxury watches, and custom design requests.",
    stack: ["Jewellery", "Luxury Catalog", "Elegant Theme"],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    url: "https://jewellery-demo.solomantalgo.com/"
  },
  {
    title: "Luxe Nails & Spa",
    status: "LIVE DEMO",
    desc: "Chic nail salon landing page featuring custom art portfolios, pricing tables, and online booking.",
    stack: ["Nail Studio", "Portfolio Gallery", "Pastel Theme"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
    url: "https://nails-demo.solomantalgo.com/"
  },
  {
    title: "Focus Photography Studio",
    status: "LIVE DEMO",
    desc: "Professional photography portfolio displaying travel, wedding, and studio galleries with a booking system.",
    stack: ["Photography", "Masonry Gallery", "Minimalist"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    url: "https://photography-demo.solomantalgo.com/"
  },
  {
    title: "Glow Makeup Artistry",
    status: "LIVE DEMO",
    desc: "Elegant cosmetics and makeup artist website showcasing bridal packages, tutorial bookings, and reviews.",
    stack: ["Makeup Artist", "Service Pricing", "Warm Aesthetic"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
    url: "https://makeup-demo.solomantalgo.online/"
  }
];



const Work = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="work-header reveal">
          <div><span className="sec-tag">Portfolio</span><h2 className="sec-title">Recent Work</h2></div>
          <p className="sec-sub" style={{ margin: 0 }}>Demo sites built for different industries across Kampala.</p>
        </div>
        <div className="work-grid">
          {projects.map((project, i) => (
            <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="work-card reveal">
              <div className="work-thumb">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="work-type">{project.status}</span>
                <div className="work-overlay"><span>View {project.status.includes('CLIENT') ? 'Site' : 'Demo'} →</span></div>
              </div>
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="work-stack">
                  {project.stack.map(tag => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
          <div className="work-card reveal" style={{ background: 'rgba(170,255,62,0.03)', border: '1px dashed rgba(170,255,62,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', padding: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚧</div>
              <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>More Coming Soon</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Hotel, pharmacy, tours & travel demos in progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
