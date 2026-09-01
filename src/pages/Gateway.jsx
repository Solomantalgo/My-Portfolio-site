import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../popup.css';

export default function Gateway() {
  const [isOpen, setIsOpen] = useState(
    () => sessionStorage.getItem('audience') !== 'closed'
  );

  const close = () => {
    sessionStorage.setItem('audience', 'closed');
    setIsOpen(false);
  };

  return (
    <main className="gateway">
      <SEO
        title="Solomantalgo | Web & Systems Developer Kampala"
        description="Business services, developer portfolio and personal contact links."
      />

      <Link className="logo" to="/" aria-label="Solomantalgo home">
        <b>S</b> SOLOMANTALGO
      </Link>

      {isOpen ? (
        <section
          className="chooser"
          role="dialog"
          aria-modal="true"
          aria-labelledby="choose-title"
          aria-describedby="choose-description"
        >
          <button className="close" onClick={close} aria-label="Close audience chooser">
            ×
          </button>

          <small>WELCOME TO SOLOMANTALGO</small>
          <h1 id="choose-title">What brings you here?</h1>
          <p id="choose-description">
            Choose the option that best describes what you're looking for.
          </p>

          <div className="choices">
            <Link className="client" to="/business" onClick={close}>
              <i>CLIENT / BUSINESS OWNER</i>
              <strong>I need a website or digital solution</strong>
              <span>Explore websites, booking, ordering and systems designed around your business.</span>
              <b>Explore Business Solutions →</b>
            </Link>

            <Link className="employer" to="/developer" onClick={close}>
              <i>EMPLOYER / RECRUITER</i>
              <strong>I'm an employer or recruiter</strong>
              <span>View technical skills, projects, engineering work and CV information.</span>
              <b>View Developer Portfolio →</b>
            </Link>

            <Link className="personal" to="/connect" onClick={close}>
              <i>PERSONAL</i>
              <strong>Just looking for me</strong>
              <span>Find my social profiles or contact me directly.</span>
              <b>Connect With Me →</b>
            </Link>
          </div>
        </section>
      ) : (
        <button className="reopen" onClick={() => setIsOpen(true)}>
          What brings you here?
        </button>
      )}

      <footer>
        Kampala, Uganda · <a href="mailto:kmantalgosolo@gmail.com">Contact</a>
      </footer>
    </main>
  );
}
