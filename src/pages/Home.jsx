import { useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Services from '../components/Services';
import Work from '../components/Work';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FAB from '../components/FAB';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';

function Home() {
  useEffect(() => {
    // REVEAL ANIMATION LOGIC FROM TRIAL.HTML
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <SEO />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </>
  );
}

export default Home;
