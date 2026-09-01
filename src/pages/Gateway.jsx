import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const DISMISSED_KEY = 'gateway-manually-dismissed-v2';

export default function Gateway() {
  const [isOpen, setIsOpen] = useState(() => sessionStorage.getItem(DISMISSED_KEY) !== 'true');
  const dismissChooser = () => { sessionStorage.setItem(DISMISSED_KEY, 'true'); setIsOpen(false); };
  const reopenChooser = () => { sessionStorage.removeItem(DISMISSED_KEY); setIsOpen(true); };

  return <main className="gateway-page">
    <SEO title="Solomantalgo | Web & Systems Developer Kampala" description="Choose business services, Solomon's developer portfolio or direct contact." />
    <Link className="logo" to="/" aria-label="Solomantalgo home"><b>S</b> SOLOMANTALGO</Link>

    {isOpen ? <section className="gateway-dialog" role="dialog" aria-modal="true" aria-labelledby="choose-title" aria-describedby="choose-description">
      <div className="gateway-intro">
        <div><h1 id="choose-title">What brings you here?</h1><p id="choose-description">Choose where you'd like to go.</p></div>
        <button className="gateway-close" type="button" onClick={dismissChooser} aria-label="Close audience chooser">×</button>
      </div>
      <div className="gateway-choices" role="navigation" aria-label="Choose your destination">
        <Link className="gateway-choice client" to="/business"><i>CLIENT / BUSINESS</i><strong>I need a website or digital solution</strong><span>Websites, booking, ordering and business systems.</span><b>Business →</b></Link>
        <Link className="gateway-choice employer" to="/developer"><i>EMPLOYER / RECRUITER</i><strong>I'm an employer or recruiter</strong><span>Technical work, projects, experience and CV.</span><b>Developer →</b></Link>
        <Link className="gateway-choice personal" to="/connect"><i>PERSONAL</i><strong>I'm looking for Solomon</strong><span>Social profiles and direct contact.</span><b>Connect →</b></Link>
      </div>
    </section> : <div className="gateway-dismissed" aria-live="polite">
      <span>Choose the path that fits your visit.</span>
      <button type="button" onClick={reopenChooser}>Open audience chooser</button>
      <footer>Kampala, Uganda · <a href="mailto:kmantalgosolo@gmail.com">Contact</a></footer>
    </div>}
  </main>;
}
