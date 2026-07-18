import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const typing = document.getElementById('typing');
    if (!typing) return undefined;

    const roles = ['Web Designer', 'Fullstack Developer', 'Problem Solver', 'Based in Kampala, Uganda', '48hr Delivery'];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function type() {
      const currentRole = roles[roleIndex];
      if (deleting) {
        typing.textContent = currentRole.substring(0, charIndex);
        charIndex -= 1;
        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      } else {
        typing.textContent = currentRole.substring(0, charIndex);
        charIndex += 1;
        if (charIndex > currentRole.length) {
          deleting = true;
          timeoutId = window.setTimeout(type, 1500);
          return;
        }
      }
      timeoutId = window.setTimeout(type, deleting ? 50 : 100);
    }

    type();
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-inner">
        <div className="hero-tag">
          <div className="live-dot"></div> Open for projects / Kampala, Uganda
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
          I build <strong>fast, modern websites</strong> for small businesses in Kampala - delivered in <strong>48 hours</strong>, priced in <strong>UGX</strong>, and designed to bring you customers on WhatsApp.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-lime">View My Work</a>
          <a href="#pricing" className="btn-ghost">See Pricing</a>
        </div>

        <div className="hero-stats">
          <div className="h-stat"><strong>10+</strong><span>Projects Built</span></div>
          <div className="h-stat"><strong>48hr</strong><span>Avg Delivery</span></div>
          <div className="h-stat"><strong>2</strong><span>Active Clients</span></div>
          <div className="h-stat"><strong>UGX</strong><span>Local Pricing</span></div>
        </div>
      </div>

      <div className="vs-badge">
        <div className="vs-head">
          <span>Feature</span>
          <span className="s">Solo</span>
          <span>Agency</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Delivery time</span>
          <span className="vs-solo">48 hrs</span>
          <span className="vs-them">2-3 wks</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Starting price</span>
          <span className="vs-solo">150k UGX</span>
          <span className="vs-them">900k UGX</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">WhatsApp direct</span>
          <span className="vs-solo">Always</span>
          <span className="vs-them">Ticketing</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Local knowledge</span>
          <span className="vs-solo">Kampala</span>
          <span className="vs-them">Generic</span>
        </div>
        <div className="vs-row">
          <span className="vs-label">Personal attention</span>
          <span className="vs-solo">Direct</span>
          <span className="vs-them">Teams</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
