import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // TYPING LOGIC FROM TRIAL.HTML
    const typing = document.getElementById('typing');
    const roles = ['Web Designer', 'Fullstack Developer', 'Problem Solver', 'Based in Kampala 🇺🇬', '48hr Delivery ⚡'];
    let ri = 0, ci = 0, del = false;

    function type() {
      const curr = roles[ri];
      if (del) {
        typing.textContent = curr.substring(0, ci--);
        if (ci < 0) { del = false; ri = (ri + 1) % roles.length; ci = 0; }
      } else {
        typing.textContent = curr.substring(0, ci++);
        if (ci > curr.length) { del = true; setTimeout(type, 1500); return; }
      }
      setTimeout(type, del ? 50 : 100);
    }
    
    type();
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-inner">
        <div className="hero-tag">
          <div className="live-dot"></div> Open for projects · Kampala, Uganda
        </div>
        <h1>
          <span className="line1">Kisense</span>
          <span className="line2">Solomon.</span>
        </h1>
        <div className="hero-role">
          <div className="role-line"></div>
          <span className="role-text"><span className="typing" id="typing"></span></span>
        </div>
        <p className="hero-desc">
          I build <strong>fast, modern websites</strong> for small businesses in Kampala — delivered in <strong>48 hours</strong>, priced in <strong>UGX</strong>, and designed to bring you customers on WhatsApp.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-lime">View My Work →</a>
          <a href="#pricing" className="btn-ghost">See Pricing</a>
        </div>
        <div className="hero-stats">
          <div className="h-stat"><strong>10+</strong><span>Projects Built</span></div>
          <div className="h-stat"><strong>48hr</strong><span>Avg Delivery</span></div>
          <div className="h-stat"><strong>2</strong><span>Active Clients</span></div>
          <div className="h-stat"><strong>UGX</strong><span>Local Pricing</span></div>
        </div>
      </div>
      
      {/* VS comparison card */}
      <div className="vs-badge">
        <div className="vs-head">
          <span>Feature</span>
          <span className="s">Solo</span>
          <span>Agency</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Delivery time</span>
          <span className="vs-solo">48 hrs</span>
          <span className="vs-them">2–3 wks</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Starting price</span>
          <span className="vs-solo">150k UGX</span>
          <span className="vs-them">900k UGX</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">WhatsApp direct</span>
          <span className="vs-solo">✓ Always</span>
          <span className="vs-them">× Ticketing</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Local knowledge</span>
          <span className="vs-solo">✓ Kampala</span>
          <span className="vs-them">~ Generic</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Personal attention</span>
          <span className="vs-solo">✓ Direct</span>
          <span className="vs-them">× Teams</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
