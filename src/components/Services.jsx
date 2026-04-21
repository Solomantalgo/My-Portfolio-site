const Services = () => {
  return (
    <section className="svc-bg" id="services">
      <div className="container">
        <div className="svc-header reveal">
          <span className="sec-tag">What I Do</span>
          <h2 className="sec-title">Skills that ship<br />real products.</h2>
          <p className="sec-sub">From a simple business website to a custom web system — I build it, deploy it and make sure it works.</p>
        </div>
        <div className="svc-grid">
          <div className="svc-card reveal">
            <div className="svc-num">01</div>
            <div className="svc-icon">🌐</div>
            <h3>Business Websites</h3>
            <p>Clean, fast, mobile-first websites for small businesses in Kampala. 48-hour delivery with WhatsApp contact, location and services.</p>
            <div className="svc-tags">
              <span className="svc-tag-item">HTML/CSS</span>
              <span className="svc-tag-item">React</span>
              <span className="svc-tag-item">Vercel</span>
            </div>
          </div>
          <div className="svc-card reveal">
            <div className="svc-num">02</div>
            <div className="svc-icon">⚙️</div>
            <h3>Custom Web Systems</h3>
            <p>Full backend systems with APIs, databases and dashboards. Inventory tracking, data entry systems and automation tools.</p>
            <div className="svc-tags">
              <span className="svc-tag-item">Spring Boot</span>
              <span className="svc-tag-item">Supabase</span>
              <span className="svc-tag-item">Railway</span>
            </div>
          </div>
          <div className="svc-card reveal">
            <div className="svc-num">03</div>
            <div className="svc-icon">🔧</div>
            <h3>Website Improvements</h3>
            <p>Already have a website but it's not working? I audit it, fix the problems — broken links, no WhatsApp, slow mobile — and rebuild where needed.</p>
            <div className="svc-tags">
              <span className="svc-tag-item">SEO</span>
              <span className="svc-tag-item">Performance</span>
              <span className="svc-tag-item">Mobile</span>
            </div>
          </div>
          <div className="svc-card reveal">
            <div className="svc-num">04</div>
            <div className="svc-icon">📍</div>
            <h3>Google Maps & SEO</h3>
            <p>Get your business showing up on Google. I set up Google My Business, submit to Search Console and handle technical SEO.</p>
            <div className="svc-tags">
              <span className="svc-tag-item">Google Business</span>
              <span className="svc-tag-item">Search Console</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
