import aboutPhoto from '../assets/solo-about-photo.png';

const About = () => {
  return (
    <section className="svc-bg" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="about-img">
              <img src={aboutPhoto} alt="Kisense Solomon web designer Kampala" loading="lazy" />
            </div>
            <div className="about-card-box">
              <div className="about-card-row"><div className="ac-dot g"></div><div className="ac-txt"><strong>Web Design</strong> — active clients</div></div>
              <div className="about-card-row"><div className="ac-dot b"></div><div className="ac-txt"><strong>Fullstack Dev</strong> — learning & building</div></div>
              <div className="about-card-row"><div className="ac-dot y"></div><div className="ac-txt"><strong>KIU SOMAC</strong> — final year BSc IT</div></div>
            </div>
          </div>
          <div className="reveal">
            <span className="sec-tag">About Me</span>
            <h2 className="sec-title">Builder. Learner.<br />Always Shipping.</h2>
            <p className="sec-sub">I'm Kisense Solomon — a 24-year-old developer and web designer based in Kampala, Uganda. Final year BSc IT at KIU. I don't wait to graduate to build real things.</p>
            <ul className="about-pts">
              <li className="about-pt"><span className="pt-check-circ">✓</span>Built inventory and stock systems for real companies in Kampala</li>
              <li className="about-pt"><span className="pt-check-circ">✓</span>Deployed fullstack apps — React, Spring Boot, Supabase, Railway</li>
              <li className="about-pt"><span className="pt-check-circ">✓</span>Running a freelance web design business with paying clients</li>
              <li className="about-pt"><span className="pt-check-circ">✓</span>Integrated Google Sheets, Africa's Talking USSD, REST APIs</li>
              <li className="about-pt"><span className="pt-check-circ">✓</span>I learn by building and fixing — not waiting until I feel ready</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
