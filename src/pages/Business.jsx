import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { work, packs, demos } from '../data/siteData';
import '../business-hero.css';

const wa = text => `https://wa.me/256775224728?text=${encodeURIComponent(text)}`;
const caps = [['Get found','Business information, location and SEO.'],['Show what you offer','Products, services, prices, galleries and menus.'],['Receive enquiries','WhatsApp, phone, email and structured forms.'],['Take bookings','Appointments, reservations and customer details.'],['Receive orders','Selection, cart, quantities and order handoff.'],['Improve workflows','Data capture, confirmations, storage and automation.'],['Connect services','Payments, APIs, social feeds and integrations.']];
const heroWork = [
  { name:'Jopeem Pharmacy', industry:'Pharmacy & Healthcare', outcome:'Products, health services and customer contact.', image:'/images/medical.png', url:'https://jopeempharmacy.com' },
  { name:'Levinah Salon', industry:'Salon & Beauty', outcome:'Services, prices and WhatsApp booking.', image:'/images/saloon.png', url:'https://www.levinahsalons.com' },
  { name:'BiteRight Restaurant', industry:'Restaurant', outcome:'Digital menu, quantities and WhatsApp ordering.', url:'https://biteright-restuarant.vercel.app/', menu:true }
];

function RealWorkShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActive(index => (index + 1) % heroWork.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const project = heroWork[active];
  return <div className="business-showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="showcase-shadow-card" aria-hidden="true" />
    <article className="showcase-browser" aria-live="polite">
      <div className="showcase-browser-bar"><div><i/><i/><i/></div><span>Real websites built for businesses</span><b>solomantalgo.com/work</b></div>
      <a className="showcase-screen" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live website`}>
        {project.menu ? <div className="menu-preview" aria-label="BiteRight digital menu interface preview">
          <div className="menu-preview-nav"><strong>BiteRight</strong><span>Menu&nbsp;&nbsp; About&nbsp;&nbsp; Contact</span></div>
          <div className="menu-preview-hero"><small>FRESHLY PREPARED</small><b>Good food.<br/>Made right.</b><span>Browse menu</span></div>
          <div className="menu-preview-items"><i/><i/><i/></div>
        </div> : <img src={project.image} alt={`${project.name} website preview`} />}
      </a>
      <div className="showcase-info">
        <div><em>REAL WORK</em><strong>{project.name}</strong><span>{project.industry}</span><p>{project.outcome}</p></div>
        <a href={project.url} target="_blank" rel="noopener noreferrer">View live ↗</a>
      </div>
    </article>
    <div className="showcase-controls" aria-label="Choose featured project">
      {heroWork.map((item, index) => <button key={item.name} type="button" className={active === index ? 'active' : ''} onClick={() => { setActive(index); setPaused(true); }} aria-label={`Show ${item.name}`} aria-pressed={active === index}><span>{item.name}</span></button>)}
    </div>
  </div>;
}

export default function Business() {
  const [answers, setAnswers] = useState({x:false,y:false,z:false});
  const recommendation = answers.z ? 'Advanced' : answers.y ? 'Business' : answers.x ? 'Standard' : 'Starter';
  return <div className="business">
    <SEO title="Web & Systems Development Kampala | Solomantalgo" description="Professional business websites, booking, ordering and digital systems in Kampala, Uganda."/>
    <header><Link className="logo" to="/"><b>S</b> SOLOMANTALGO</Link><div className="business-nav" role="navigation" aria-label="Business navigation"><a href="#work">Work</a><a href="#solutions">Solutions</a><a href="#packages">Packages</a><a href="#process">Process</a><Link to="/developer">For Employers</Link><a className="button" href={wa('Hi Solomon, I would like to discuss a website or digital system.')}>Let's talk</a></div></header>
    <main>
      <section className="business-hero">
        <div className="business-hero-copy">
          <small>WEB &amp; SYSTEMS DEVELOPMENT · KAMPALA, UGANDA</small>
          <h1>Websites and digital systems built around how your business actually works.</h1>
          <p>Professional websites and practical digital solutions for salons, restaurants, pharmacies and growing businesses—from getting online to booking, ordering, customer workflows and integrations.</p>
          <div className="business-hero-actions"><a className="button" href="#work">See Real Client Work</a><a className="button outline" href="#packages">View Packages</a></div>
          <ul className="business-hero-trust" aria-label="Service reassurance"><li>UGX pricing</li><li>Direct developer contact</li><li>2 months routine updates</li></ul>
        </div>
        <RealWorkShowcase />
      </section>

      <section id="work"><small>PROOF BEFORE PROMISES</small><h2>Real websites built for businesses</h2><p className="lead">Open genuine client work before exploring concept demos.</p><div className="cards">{work.map(w=><article key={w.n}><img src={w.img} alt={`${w.n} website preview`} loading="lazy"/><div><em>REAL CLIENT</em><small>{w.i}</small><h3>{w.n}</h3><p>{w.d}</p><a href={w.u} target="_blank" rel="noreferrer">View Live Website ↗</a></div></article>)}</div></section>
      <section className="shade" id="solutions"><small>PRACTICAL BUSINESS CAPABILITIES</small><h2>What can your website or system help your business do?</h2><div className="capabilities">{caps.map((c,i)=><article key={c[0]}><b>0{i+1}</b><h3>{c[0]}</h3><p>{c[1]}</p></article>)}</div></section>
      <section id="packages"><small>CAPABILITY-BASED PRICING</small><h2>Choose the right starting point</h2><p className="lead">Every package includes responsive design and two months of routine content updates after deployment.</p><div className="prices">{packs.map(p=><article className={p.hot?'hot':''} key={p.n}>{p.hot&&<em>POPULAR</em>}<small>{p.s}</small><h3>{p.n}</h3><strong>{p.p}</strong><ul>{p.f.map(f=><li key={f}>✓ {f}</li>)}</ul><details><summary>See full package details</summary><p>Final scope is based on required functionality. Major extra features and integrations are quoted separately.</p></details><a className="button" href={wa(`Hi Solomon, I'm interested in the ${p.n} website package for my business.`)}>Discuss {p.n}</a></article>)}</div>
        <div className="recommender"><div><small>QUICK GUIDANCE</small><h3>Which website solution fits my business?</h3><p>Tick what you need. This is guidance, not a final quotation.</p></div><div>{[['x','Customers select, order or submit structured bookings'],['y','Store customer data or run confirmations/workflows'],['z','Connect payments, APIs or third-party services']].map(q=><label key={q[0]}><input type="checkbox" onChange={event=>setAnswers({...answers,[q[0]]:event.target.checked})}/>{q[1]}</label>)}</div><aside><small>BEST STARTING POINT</small><b>{recommendation}</b><span>{packs.find(p=>p.n===recommendation).p}</span><a className="button" href={wa(`Hi Solomon, your guide suggested ${recommendation}. I'd like to discuss it.`)}>Discuss on WhatsApp</a></aside></div>
      </section>
      <section className="shade"><small>DEMO LIBRARY</small><h2>Explore website ideas by industry</h2><div className="demo-grid">{demos.map(d=><a href={d[2]} target="_blank" rel="noreferrer" key={d[0]}><em>DEMO CONCEPT</em><small>{d[1]}</small><h3>{d[0]}</h3><b>Open demo ↗</b></a>)}</div></section>
      <section id="process"><small>STRAIGHTFORWARD PROCESS</small><h2>From your idea to a working solution</h2><ol className="process">{[['Tell me about your business','Clarify what customers or staff need to do.'],['Choose the right solution','Agree on package and scope.'],['First version is built','Simple sites can often have a first version in around two days; advanced systems depend on scope.'],['Review and adjustments','Review and refine agreed details.'],['Go live','Deploy and connect the domain as applicable.'],['Two months routine updates','Prices, existing text, images, hours and promotions are covered.']].map((x,i)=><li key={x[0]}><b>{i+1}</b><div><h3>{x[0]}</h3><p>{x[1]}</p></div></li>)}</ol></section>
      <section className="support"><div><small>SUPPORT AFTER LAUNCH</small><h2>Two months of routine updates included.</h2><p>Routine updates cover prices, existing images/text, business information, opening hours, promotions and items in existing sections. New pages, redesigns, major features and integrations are quoted separately.</p></div><details><summary>Ongoing maintenance options</summary><p>Active — UGX 80,000/month<br/>Weekly — UGX 50,000/month<br/>Bi-weekly — UGX 35,000/month<br/>Monthly — UGX 25,000/month</p></details></section>
      <section className="cta"><small>READY TO BUILD?</small><h2>Tell me what customers or staff should be able to do.</h2><p>I'll recommend a clear, practical solution.</p><a className="button" href={wa('Hi Solomon, I would like to tell you what my business needs.')}>Tell Me What You Need</a></section>
    </main>
    <footer><Link className="logo" to="/"><b>S</b> SOLOMANTALGO</Link><span>Web &amp; systems development · Kampala, Uganda</span><Link to="/developer">Developer Portfolio</Link></footer>
  </div>;
}
