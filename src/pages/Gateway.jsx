import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const HEADLINE = 'I am Solomon.';
const FIRST_LINE = 'I build, explore and connect.';
const FINAL_LINE = 'Choose your path.';
let introductionFinishedThisDocument = false;
const DESTINATIONS = [
  { number: '01', name: 'Business', description: 'Ideas to impact.', href: '/business', tone: 'business' },
  { number: '02', name: 'Work & CV', description: 'Experience in focus.', href: '/developer', tone: 'work' },
  { number: '03', name: 'Connect', description: "Let's talk.", href: '/connect', tone: 'connect' },
];

function shouldPlayIntroduction() {
  if (typeof window === 'undefined') return false;
  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (shouldReduceMotion) {
    introductionFinishedThisDocument = true;
    return false;
  }
  if (introductionFinishedThisDocument) return false;
  return true;
}

export default function Gateway() {
  const [isSequencing, setIsSequencing] = useState(shouldPlayIntroduction);
  const [subtitle, setSubtitle] = useState(() => isSequencing ? '' : FINAL_LINE);
  const [caretLine, setCaretLine] = useState('');
  const [cardsEntering, setCardsEntering] = useState(false);
  const finishSequence = useRef(() => {});

  useEffect(() => {
    if (!isSequencing) return undefined;

    let cancelled = false;
    const timers = new Set();
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = (duration) => new Promise((resolve) => {
      const pending = { id: 0, resolve };
      pending.id = window.setTimeout(() => {
        timers.delete(pending);
        resolve();
      }, duration);
      timers.add(pending);
    });
    const clearTimers = () => {
      timers.forEach((pending) => {
        window.clearTimeout(pending.id);
        pending.resolve();
      });
      timers.clear();
    };
    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      introductionFinishedThisDocument = true;
      clearTimers();
      setSubtitle(FINAL_LINE);
      setCaretLine('');
      setCardsEntering(false);
      setIsSequencing(false);
    };
    const reduceNow = () => motionPreference.matches && finish();
    finishSequence.current = finish;
    motionPreference.addEventListener?.('change', reduceNow);

    const type = async (text, setter, speed) => {
      let visible = '';
      for (const character of text) {
        if (cancelled) return;
        visible += character;
        setter(visible);
        await pause(speed);
      }
    };

    const run = async () => {
      await pause(380);
      if (cancelled) return;
      setCaretLine('subtitle');
      await type(FIRST_LINE, setSubtitle, 64);
      if (cancelled) return;
      await pause(750);
      if (cancelled) return;
      for (let length = FIRST_LINE.length - 1; length >= 0 && !cancelled; length -= 1) {
        setSubtitle(FIRST_LINE.slice(0, length));
        await pause(35);
      }
      if (cancelled) return;
      await type(FINAL_LINE, setSubtitle, 72);
      if (cancelled) return;
      if (!cancelled) {
        setCaretLine('');
        setCardsEntering(true);
        await pause(620);
      }
      if (!cancelled) {
        introductionFinishedThisDocument = true;
        setIsSequencing(false);
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimers();
      motionPreference.removeEventListener?.('change', reduceNow);
    };
  }, [isSequencing]);

  const completeOnInput = () => {
    if (isSequencing) finishSequence.current();
  };
  return <main
    className={`gateway-option2${isSequencing ? ' is-sequencing' : ''}${cardsEntering ? ' is-card-entering' : ''}`}
    onPointerDownCapture={completeOnInput}
    onKeyDownCapture={completeOnInput}
    onFocusCapture={completeOnInput}
  >
    <SEO title="Solomantalgo | Personal portfolio" description="I build, explore and connect. Find my business work, engineering projects and ways to get in touch." />
    <Helmet>
      <link
        rel="preload"
        as="image"
        type="image/webp"
        imageSrcSet="/images/gateway-workspace-640.webp 640w, /images/gateway-workspace-1280.webp 1280w, /images/gateway-workspace.webp 1672w"
        imageSizes="(max-width: 700px) 100vw, 60vw"
        fetchPriority="high"
      />
    </Helmet>
    <header className="gateway-header">
      <img src="/images/newlogo.png" srcSet="/images/newlogo-320.png 320w, /images/newlogo-640.png 640w" sizes="(max-width: 700px) 156px, 174px" alt="Solomantalgo" width="2172" height="724" decoding="async" />
    </header>
    <section className="gateway-stage" aria-label="Personal portfolio">
      <div className="gateway-intro">
        <h1><span aria-hidden="true">I am Solomon<span className="gateway-period">.</span></span><span className="gateway-sr-only">{HEADLINE}</span></h1>
        <p aria-hidden="true" className="gateway-subtitle">
          <span className="gateway-subtitle-text">{subtitle}</span>
          {caretLine === 'subtitle' && <span className="gateway-caret" />}
        </p>
        <span className="gateway-sr-only">{FINAL_LINE}</span>
      </div>
      <div className="gateway-photo" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/gateway-workspace-640.webp 640w, /images/gateway-workspace-1280.webp 1280w, /images/gateway-workspace.webp 1672w"
            sizes="(max-width: 700px) 100vw, 60vw"
          />
          <img src="/images/gateway-workspace.png" alt="" width="1672" height="941" fetchPriority="high" />
        </picture>
      </div>
      <nav className="gateway-destinations" aria-label="Choose your path">
        {DESTINATIONS.map((item) => <Link className={`gateway-destination ${item.tone}`} to={item.href} key={item.name}>
          <span className="gateway-number" aria-hidden="true">{item.number}</span>
          <span className="gateway-accent" aria-hidden="true" />
          <span className="gateway-destination-copy"><strong>{item.name}</strong><small>{item.description}</small></span>
          <span className="gateway-arrow" aria-hidden="true"><ArrowRight size={20} strokeWidth={1.7} /></span>
        </Link>)}
      </nav>
    </section>
    <footer className="gateway-footer"><span>Kampala, Uganda</span><span>© {new Date().getFullYear()} Solomantalgo</span></footer>
  </main>;
}
