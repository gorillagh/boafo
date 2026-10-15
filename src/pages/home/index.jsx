import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Headphones, Mic, ScanEye, Languages, SlidersHorizontal, Menu, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Brand from '@/components/Brand';
import ReadingDemo from '@/components/ReadingDemo';
import { useWorkspace } from '@/stores/workspace';
import { useEntrance } from '@/hooks/useEntrance';
const features = [
  [Headphones, 'Listen instead of reading.', 'Turn written content into spoken words and follow along at your own pace.', '01'],
  [Mic, 'Let your voice do the typing.', 'Use speech-to-text to express yourself with less effort.', '02'],
  [ScanEye, 'Read more comfortably.', 'Adjust text, spacing, and focus tools to make a page easier to follow.', '03'],
  [Languages, 'Feel at home in your language.', 'Explore language support built with local communities in mind.', '04'],
];
const faqs = [
  ['What is Boafo?', 'Boafo is a browser accessibility companion from Digital Drivers Technology. It brings tools for reading, listening, and interacting with digital content together in one place.'],
  ['How do I get started?', 'Create an account, choose your reading and language preferences, then install the Boafo extension from the Chrome Web Store.'],
  ['Can I try it before signing up?', 'Yes. The reading demo on this page uses your browser’s voice to read a sample article. You can also adjust the sample text size without an account.'],
  ['Does Boafo make every website fully accessible?', 'Boafo helps people adapt their browsing experience. Website accessibility also depends on how a site is built; a browser tool cannot guarantee that every website meets an accessibility standard.'],
];
export default function Home() {
  const { menuOpen, setMenuOpen } = useWorkspace();
  const ref = useEntrance();
  return <div className="marketing" ref={ref}>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="site-nav"><Brand /><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{[['Features','#features'],['How it works','#how-it-works'],['Our story','#about'],['FAQs','#faqs']].map(([label,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><Link to="/login" className="login-link">Log in</Link><Button asChild><Link to="/onboarding">Get started <ArrowUpRight /></Link></Button><Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div></div></header>
    <main id="main"><section className="hero-section page-width"><div className="hero-topline" data-reveal><span className="small-pill"><span /> Made for every kind of mind.</span><span className="hero-index">INDEPENDENCE, ONLINE.</span></div><div className="hero-copy"><h1 data-reveal>The web is for everyone.<br /><span>Make it yours.</span></h1><div data-reveal><p>Read, listen, and explore with more ease. Boafo puts everyday accessibility tools right where you need them.</p><div className="hero-actions"><Button asChild size="lg"><Link to="/onboarding">Find your way with Boafo <ArrowUpRight /></Link></Button><a href="#try-it" className="text-link">Try the experience <ArrowRight size={16} /></a></div><span className="hero-footnote"><Check size={14} /> Built for people. Designed for independence.</span></div></div><div id="try-it" className="hero-demo" data-reveal><ReadingDemo /></div><div className="feature-strip"><span><Headphones /> Listen comfortably</span><span><SlidersHorizontal /> Read your way</span><span><Languages /> Connect across languages</span><span><ScanEye /> Discover more</span></div></section>
    <section id="features" className="features-section page-width"><div className="section-heading"><div><span className="eyebrow">LESS FRICTION. MORE FREEDOM.</span><h2>A little help.<br />A lot more possibility.</h2></div><p>Different people need different things.<br />Find the tools that work for you.</p></div><div className="feature-grid">{features.map(([Icon,title,body,number]) => <article className="feature-item" key={title}><div className="feature-icon"><Icon size={24} /><span>{number}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section id="how-it-works" className="steps-section"><div className="page-width steps-layout"><div><span className="eyebrow">MAKE YOURSELF AT HOME</span><h2>Your web.<br />In three simple steps.</h2><Button asChild variant="outline"><Link to="/onboarding">Let’s get you set up <ArrowUpRight /></Link></Button></div><ol>{[['Create your space','Sign up for your personal Boafo account.'],['Tell us what works for you','Choose your goals, voice, reading pace, and language interests.'],['Take Boafo with you','Install the browser extension and explore with your tools close by.']].map(([title,body],i) => <li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={19} /></li>)}</ol></div></section>
    <section id="about" className="page-width about-section"><div className="story-mark" aria-hidden="true"><img src="/logo-green.png" alt="" /><span>Everyone<br />belongs here.</span></div><div><span className="eyebrow">ROOTED IN GHANA. OPEN TO EVERYONE.</span><h2>Independence starts<br />with being included.</h2><p>Boafo is built by Digital Drivers Technology, a Ghanaian team working to make digital experiences more inclusive. Our purpose is simple: help people of all abilities explore the web with greater confidence.</p><a className="text-link" href="mailto:digitaldriverstechnologies@gmail.com">Say hello to the team <ArrowUpRight size={16} /></a></div></section>
    <section id="faqs" className="page-width faq-section"><div><span className="eyebrow">GOOD TO KNOW</span><h2>A few questions,<br />answered.</h2><p>Need a hand? <a href="mailto:digitaldriverstechnologies@gmail.com">We’re here to help.</a></p></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="page-width"><div className="final-cta"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>A more comfortable web<br />is within reach.</h2><Button asChild size="lg"><Link to="/onboarding">Get started with Boafo <ArrowUpRight /></Link></Button><span className="cta-decoration" aria-hidden="true">↗</span></div></section></main>
  </div>;
}
