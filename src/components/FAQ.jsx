const faqs = [
  {
    q: "How long does a website take?",
    a: "Most websites are ready within 48 hours of me receiving your details — business name, services, photos and location. More complex sites take 3–5 days. I always communicate clearly on timelines before starting."
  },
  {
    q: "How do I pay?",
    a: "50% upfront via Mobile Money (MTN or Airtel) before I start, and 50% on delivery when you approve the final site. No hidden fees — what we agree is what you pay."
  },
  {
    q: "What if I want changes after it's live?",
    a: "One round of revisions is included in every package. Need to update a price or add a service later? My monthly maintenance plan covers ongoing updates for UGX 80,000/month."
  },
  {
    q: "Will my site show on Google?",
    a: "Every site I build includes basic SEO setup — meta tags, Google Search Console submission and indexing request. Premium and add-on packages include Google My Business setup too."
  },
  {
    q: "Do I need technical knowledge?",
    a: "None at all. You give me your details on WhatsApp — I handle everything. Building, deploying, setting up your domain and making it live. You just review and approve."
  },
  {
    q: "Can you work with businesses outside Kampala?",
    a: "Yes — I work remotely across Uganda. All communication and file sharing happens on WhatsApp and Google Drive, so location doesn't matter. I've worked with businesses all over Uganda."
  }
];

const FAQ = () => {
  return (
    <section className="faq-bg" id="faq">
      <div className="container">
        <div className="faq-header reveal">
          <span className="sec-tag">Common Questions</span>
          <h2 className="sec-title">Everything you need<br />to know.</h2>
          <p className="sec-sub">Still have questions? Just WhatsApp me directly — I reply within the hour.</p>
        </div>
        <div className="faq-grid reveal">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item-box">
              <div className="faq-q-text">{faq.q}</div>
              <div className="faq-a-text">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
