const projects = [
  {
    title: "Bite Right Restaurant",
    status: "LIVE CLIENT ✓",
    desc: "A modern menu & ordering site for a real restaurant. Syncs with Google Sheets for real-time price updates.",
    stack: ["Restaurant", "API Sync", "Dark Theme"],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://biteright-restuarant.vercel.app/"
  },
  {
    title: "Lifecare Medical Centre",
    status: "LIVE DEMO",
    desc: "Medical clinic with doctors section, appointment booking and emergency contact strip.",
    stack: ["Hospital", "Doctors Grid", "Navy Theme"],
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://clinic-demo.solomantalgo.online"
  },
  {
    title: "Zuri Beauty Studio",
    status: "LIVE DEMO",
    desc: "Luxury beauty salon with African images, gold theme, gallery and booking form.",
    stack: ["Beauty", "Gold Theme", "Slideshow"],
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://saloon-demo.solomantalgo.online"
  },
  {
    title: "PressedUG Laundry",
    status: "LIVE DEMO",
    desc: "Laundry and dry cleaning with pickup booking form and free delivery pitch.",
    stack: ["Laundry", "Booking Form", "Blue Theme"],
    image: "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://laundry-demo.solomantalgo.online"
  },
  {
    title: "Ivory Bridal Studio",
    status: "LIVE DEMO",
    desc: "Rose and cream editorial luxury bridal site with gallery and consultation form.",
    stack: ["Bridal", "Luxury", "Rose Theme"],
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=700",
    url: "https://bridal-demo.solomantalgo.online"
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
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>Photography, hotel, pharmacy, jewellery demos in progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
