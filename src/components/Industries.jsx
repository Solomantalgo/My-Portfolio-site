const Industries = () => {
  const industries = [
    { icon: "🍽️", name: "Restaurant", url: "https://restaurant-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "🏥", name: "Clinic", url: "https://clinic-demo.solomantalgo.online", sub: "View Demo →" },
    { icon: "💇‍♀️", name: "Salon", url: "https://saloon-demo.solomantalgo.com", sub: "View Demo →" },
    { icon: "👔", name: "Laundry", url: "https://laundry-demo.solomantalgo.com", sub: "View Demo →" },
    { icon: "👰", name: "Bridal", url: "https://bridal-demo.solomantalgo.com", sub: "View Demo →" },
    { icon: "🥐", name: "Bakery", url: "https://bakery-demo.solomantalgo.com", sub: "View Demo →" },
    { icon: "👗", name: "Fashion", url: "https://fashion-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "💪", name: "Gym & Fitness", url: "https://gym-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "📷", name: "Photography", url: "https://photography-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "💍", name: "Jewellery", url: "https://jewellery-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "💅", name: "Nail Studio", url: "https://nails-demo.solomantalgo.com/", sub: "View Demo →" },
    { icon: "💄", name: "Makeup Artist", url: "https://makeup-demo.solomantalgo.online/", sub: "View Demo →" },
    { icon: "💊", name: "Pharmacy", sub: "Coming Soon" },
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
