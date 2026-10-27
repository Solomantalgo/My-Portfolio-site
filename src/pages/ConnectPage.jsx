import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ConnectPage() {
  return <main className="connect-page">
    <SEO title="Let's talk | Solomantalgo" description="For a project, an opportunity or simply to say hello. Get in touch with Solomon." canonicalUrl="https://solomantalgo.com/connect" />
    <header className="connect-header">
      <Link to="/" aria-label="Solomantalgo home"><img src="/images/newlogo.png" alt="Solomantalgo" /></Link>
      <Link to="/" className="connect-back">Back to home <ArrowRight size={18} aria-hidden="true" /></Link>
    </header>
    <div className="connect-layout">
      <div className="connect-photo" aria-hidden="true"><img src="/images/studio/gateway-connect.webp" alt="" /></div>
      <section className="connect-copy" aria-labelledby="connect-title">
        <p className="studio-kicker">Connect</p>
        <h1 id="connect-title">Let&#8217;s talk.</h1>
        <p className="connect-intro">For a project, an opportunity or simply to say hello. I&#8217;d love to hear from you.</p>
        <div className="connect-identity">
          <img src="/images/me.png" alt="Solomon Kisense" />
          <span>Solomon Kisense</span>
        </div>
        <div className="connect-actions">
          <a className="connect-whatsapp" href="https://wa.me/256775224728"><MessageCircle size={19} aria-hidden="true" />Chat on WhatsApp <ArrowRight size={19} aria-hidden="true" /></a>
          <a className="connect-call" href="tel:0775224728"><Phone size={18} aria-hidden="true" />Call me</a>
          <a className="connect-email" href="mailto:kmantalgosolo@gmail.com"><Mail size={16} aria-hidden="true" />Send an email</a>
        </div>
      </section>
    </div>
    <footer className="connect-footer">
      <span><MapPin size={17} aria-hidden="true" />Kampala, Uganda</span>
      <Link to="/links">More links <ArrowRight size={17} aria-hidden="true" /></Link>
      <small>Solomantalgo</small>
    </footer>
  </main>;
}
