const Industries = () => {
  const industries = [
    { icon: "🍽️", name: "Restaurant", url: "https://biteright-restuarant.vercel.app/", sub: "View Live Site →" },
    { icon: "🏥", name: "Clinic", url: "https://clinic-demo.solomantalgo.online", sub: "View Demo →" },
    { icon: "💇‍♀️", name: "Salon", url: "https://saloon-demo.solomantalgo.online", sub: "View Demo →" },
    { icon: "👔", name: "Laundry", url: "https://laundry-demo.solomantalgo.online", sub: "View Demo →" },
    { icon: "👰", name: "Bridal", url: "https://bridal-demo.solomantalgo.online", sub: "View Demo →" },
    { icon: "💊", name: "Pharmacy", sub: "Coming Soon" },
    { icon: "📷", name: "Photography", sub: "Coming Soon" },
    { icon: "💍", name: "Jewellery", sub: "Coming Soon" },
    { icon: "💅", name: "Nail Studio", sub: "Coming Soon" },
    { icon: "💄", name: "Makeup Artist", sub: "Coming Soon" },
    { icon: "🏨", name: "Hotel", sub: "Coming Soon" },
    { icon: "✈️", name: "Tours & Travel", sub: "Coming Soon" },
  ];

  return (
    <section className="svc-bg">
      <div className="container">
        <div className="ind-header reveal">
          <span className="sec-tag">Industries I Serve</span>
          <h2 className="sec-title">I've built demos for<br />every business type.</h2>
        </div>
        <div className="ind-grid">
          {industries.map((ind, i) => (
            ind.url ? (
              <a key={i} href={ind.url} target="_blank" rel="noopener noreferrer" className="ind-card reveal">
                <span className="ind-icon">{ind.icon}</span>
                <div className="ind-name">{ind.name}</div>
                <div className="ind-sub">{ind.sub}</div>
              </a>
            ) : (
              <div key={i} className="ind-card reveal">
                <span className="ind-icon">{ind.icon}</span>
                <div className="ind-name">{ind.name}</div>
                <div className="ind-sub">{ind.sub}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
