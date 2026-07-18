const packages = [
  {
    name: 'Basic',
    amount: '150k',
    desc: 'Perfect for getting your business online fast with the essentials.',
    featured: false,
    features: [
      ['yes', 'Single page website'],
      ['yes', 'Services and location section'],
      ['yes', 'WhatsApp contact button'],
      ['yes', 'Mobile responsive'],
      ['yes', 'Deployed and live URL'],
      ['no', 'Gallery section'],
      ['no', 'Booking form']
    ]
  },
  {
    name: 'Standard',
    amount: '350k',
    desc: 'Full business site with everything your customers need to find and contact you.',
    featured: true,
    features: [
      ['yes', 'Multi-section website'],
      ['yes', 'Services with UGX prices'],
      ['yes', 'Photo gallery'],
      ['yes', 'Contact and booking form'],
      ['yes', 'WhatsApp and social FAB button'],
      ['yes', 'Google Maps embed'],
      ['yes', 'Mobile responsive and SEO tags']
    ]
  },
  {
    name: 'Premium',
    amount: '700k',
    desc: 'For businesses that want to compete at the highest level in Kampala.',
    featured: false,
    features: [
      ['yes', 'Everything in Standard'],
      ['yes', 'WhatsApp booking per service'],
      ['yes', 'Testimonials section'],
      ['yes', 'Google My Business setup'],
      ['yes', 'Google Search Console setup'],
      ['yes', 'Full SEO meta tags'],
      ['yes', '1 month free updates']
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="sec-tag">Transparent Pricing</span>
          <h2 className="sec-title">Simple UGX pricing.<br />No hidden fees.</h2>
          <p className="sec-sub">Choose the package that fits your business. All prices in Ugandan Shillings - no dollar charges.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((pack) => (
            <div key={pack.name} className={`price-card reveal${pack.featured ? ' featured' : ''}`}>
              {pack.featured && <div className="price-badge">MOST POPULAR</div>}
              <div className="price-name">{pack.name}</div>
              <div className="price-amount">{pack.amount} <span>UGX</span></div>
              <div className="price-desc">{pack.desc}</div>
              <ul className="price-features">
                {pack.features.map(([state, feature]) => (
                  <li key={feature} className="price-feat">
                    <span className={state === 'yes' ? 'feat-check' : 'feat-no'}>{state === 'yes' ? 'Yes' : 'No'}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`price-btn ${pack.featured ? 'price-btn-main' : 'price-btn-ghost'}`}>Get Started</a>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '1.5rem' }}>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.2rem', fontWeight: 300 }}>Add-on services - available with any package</p>
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
