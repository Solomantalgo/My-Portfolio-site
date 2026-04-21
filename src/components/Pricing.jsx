const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="sec-tag">Transparent Pricing</span>
          <h2 className="sec-title">Simple UGX pricing.<br />No hidden fees.</h2>
          <p className="sec-sub">Choose the package that fits your business. All prices in Ugandan Shillings — no dollar charges.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="price-name">Basic</div>
            <div className="price-amount">150k <span>UGX</span></div>
            <div className="price-desc">Perfect for getting your business online fast with the essentials.</div>
            <ul className="price-features">
              <li className="price-feat"><span className="feat-check">✓</span><span>Single page website</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Services & location section</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>WhatsApp contact button</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Mobile responsive</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Deployed & live URL</span></li>
              <li className="price-feat"><span className="feat-no">✗</span><span>Gallery section</span></li>
              <li className="price-feat"><span className="feat-no">✗</span><span>Booking form</span></li>
            </ul>
            <a href="#contact" className="price-btn price-btn-ghost">Get Started</a>
          </div>
          <div className="price-card featured reveal">
            <div className="price-badge">MOST POPULAR ⚡</div>
            <div className="price-name">Standard</div>
            <div className="price-amount">350k <span>UGX</span></div>
            <div className="price-desc">Full business site with everything your customers need to find and contact you.</div>
            <ul className="price-features">
              <li className="price-feat"><span className="feat-check">✓</span><span>Multi-section website</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Services with UGX prices</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Photo gallery</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Contact & booking form</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>WhatsApp + social FAB button</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Google Maps embed</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Mobile responsive + SEO tags</span></li>
            </ul>
            <a href="#contact" className="price-btn price-btn-main">Get Started</a>
          </div>
          <div className="price-card reveal">
            <div className="price-name">Premium</div>
            <div className="price-amount">700k <span>UGX</span></div>
            <div className="price-desc">For businesses that want to compete at the highest level in Kampala.</div>
            <ul className="price-features">
              <li className="price-feat"><span className="feat-check">✓</span><span>Everything in Standard</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>WhatsApp booking per service</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Testimonials section</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Google My Business setup</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Google Search Console setup</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>Full SEO meta tags</span></li>
              <li className="price-feat"><span className="feat-check">✓</span><span>1 month free updates</span></li>
            </ul>
            <a href="#contact" className="price-btn price-btn-ghost">Get Started</a>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: '1.5rem' }}>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.2rem', fontWeight: 300 }}>Add-on services — available with any package</p>
          <div className="addon-grid">
            <div className="addon"><span className="addon-name">Google My Business Setup</span><span className="addon-price">50k UGX</span></div>
            <div className="addon"><span className="addon-name">Google Search Console</span><span className="addon-price">30k UGX</span></div>
            <div className="addon"><span className="addon-name">Monthly Maintenance</span><span className="addon-price">80k UGX/mo</span></div>
            <div className="addon"><span className="addon-name">Extra Page Added</span><span className="addon-price">50k UGX</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
