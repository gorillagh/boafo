import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Headphones, Mic, ScanEye, Languages, SlidersHorizontal, Menu, X, Check, Copy, CheckCheck, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Brand from '@/components/Brand';
import { useWorkspace } from '@/stores/workspace';
import { useEntrance } from '@/hooks/useEntrance';

const features = [
  {
    title: 'Listen instead of reading',
    body: 'Turn written articles, documentation, and news into smooth spoken words. Follow along at your chosen pace.',
    image: '/illustrations/text-to-speech-preview.webp',
    number: '01',
    badge: 'Text-to-Speech'
  },
  {
    title: 'Let your voice do the typing',
    body: 'Speak naturally and let Boafo type for you. Hands-free input engineered for comfort and clarity.',
    image: '/illustrations/speech-to-text-preview.png',
    number: '02',
    badge: 'Voice Dictation'
  },
  {
    title: 'Read with visual comfort',
    body: 'Fine-tune your screen with high-contrast modes, readable dyslexia fonts, customizable line spacing, and focus tools.',
    image: '/illustrations/resizable-elements.jpg',
    number: '03',
    badge: 'Visual Tools'
  },
  {
    title: 'Feel at home in your language',
    body: 'Experience the web in local African languages and natural native accents built in collaboration with local communities.',
    image: '/illustrations/language-translation-preview.webp',
    number: '04',
    badge: 'Local Languages'
  }
];

const testimonials = [
  {
    name: 'Ama K.',
    role: 'Graduate Researcher · Accra',
    avatar: '/testimonials/ama.webp',
    quote: 'Listening to long articles with Boafo while taking notes has changed my study rhythm completely. It feels natural and effortless.'
  },
  {
    name: 'Kofi Mensah',
    role: 'Digital Accessibility Advocate',
    avatar: '/testimonials/kofi.jpg',
    quote: 'For low-vision users like me, the contrast adjustments and speech tools mean I no longer struggle on essential web services.'
  },
  {
    name: 'Sampson D.',
    role: 'Product Engineer · Accra',
    avatar: '/testimonials/Sampson.jpg',
    quote: 'We designed Boafo because access to knowledge should be a universal reality online, never an afterthought or an obstacle.'
  }
];

const faqs = [
  ['What is Boafo?', 'Boafo is an inclusive browser accessibility companion built by Digital Drivers Technology. It brings assistive reading, natural listening, and adaptive viewing tools together directly in your browser.'],
  ['How do I get started?', 'Create a free account, choose your reading speed and voice preferences, and add Boafo to your browser or website in minutes.'],
  ['How can I test the plugin?', 'Look at the bottom-right corner of this page! The floating Boafo icon is live right now. Click it or press Alt+W to test all the accessibility tools directly on this site.'],
  ['Can developers embed Boafo on their own websites?', 'Yes. Developers and organizations can create a website access code in their dashboard and embed Boafo on any site with a single script tag.'],
];

export default function Home() {
  const { menuOpen, setMenuOpen } = useWorkspace();
  const ref = useEntrance();
  const [copied, setCopied] = useState(false);

  const embedSnippet = `<script defer src="https://boafo-plugin-widget.vercel.app/widget.bundle.js" data-api-key="YOUR_WEBSITE_CODE"></script>`;

  const copySnippet = () => {
    navigator.clipboard?.writeText(embedSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerPlugin = () => {
    const btn = document.getElementById('accessibility-widget-button');
    if (btn) {
      btn.click();
    } else {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'w', altKey: true }));
    }
  };

  return (
    <div className="marketing" ref={ref}>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="site-header">
        <div className="site-nav">
          <Brand />
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
            {[
              ['Features', '#features'],
              ['How it works', '#how-it-works'],
              ['Developers', '#developers'],
              ['Community', '#community'],
              ['Our story', '#about'],
              ['FAQs', '#faqs']
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <Link to="/login" className="login-link">Log in</Link>
            <Button asChild>
              <Link to="/onboarding">Get started <ArrowUpRight size={16} /></Link>
            </Button>
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero-section page-width">
          <div className="hero-topline" data-reveal>
            <span className="small-pill">
              <span className="pill-dot" /> Made for every kind of mind.
            </span>
            <span className="hero-index">INDEPENDENCE, ONLINE.</span>
          </div>

          <div className="hero-copy">
            <h1 data-reveal>
              The web is for everyone.<br />
              <span>Make it yours.</span>
            </h1>
            <div data-reveal>
              <p>
                Read, listen, and explore with more ease. Boafo puts everyday accessibility tools right where you need them.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <Link to="/onboarding">Find your way with Boafo <ArrowUpRight size={18} /></Link>
                </Button>
                <button type="button" onClick={triggerPlugin} className="text-link plugin-trigger-btn">
                  Test live plugin <ArrowRight size={16} />
                </button>
              </div>
              <span className="hero-footnote">
                <Check size={14} /> Built for people. Designed for independence.
              </span>
            </div>
          </div>

          {/* Hero Showcase Visual */}
          <div className="hero-showcase-container" data-reveal>
            <div className="hero-showcase-card">
              <img
                src="/hero-showcase.jpg"
                alt="Boafo Accessibility Companion modern 3D interface"
                className="hero-showcase-img"
              />
              <div className="hero-showcase-badge">
                <span className="pulse-dot" />
                <span>Live Accessibility Companion · Try bottom-right icon or Alt+W</span>
              </div>
            </div>
          </div>

          <div className="feature-strip">
            <span><Headphones size={16} /> Listen comfortably</span>
            <span><SlidersHorizontal size={16} /> Read your way</span>
            <span><Languages size={16} /> Connect across languages</span>
            <span><ScanEye size={16} /> Discover more</span>
          </div>
        </section>

        {/* Visual Bento Grid Features Section */}
        <section id="features" className="features-section page-width">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">LESS FRICTION. MORE FREEDOM.</span>
              <h2>A little help.<br />A lot more possibility.</h2>
            </div>
            <p>
              Different people need different tools.<br />
              Explore how Boafo adapts to you.
            </p>
          </div>

          <div className="bento-grid">
            {features.map((item) => (
              <article className="bento-card" key={item.title} data-reveal>
                <div className="bento-media">
                  <img src={item.image} alt={item.title} className="bento-img" />
                  <span className="bento-tag">{item.badge}</span>
                </div>
                <div className="bento-content">
                  <span className="bento-num">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="steps-section">
          <div className="page-width steps-layout">
            <div data-reveal>
              <span className="eyebrow">MAKE YOURSELF AT HOME</span>
              <h2>Your web.<br />In three simple steps.</h2>
              <Button asChild variant="outline">
                <Link to="/onboarding">Let's get you set up <ArrowUpRight size={16} /></Link>
              </Button>
            </div>
            <ol>
              {[
                ['Create your space', 'Sign up for your personal Boafo account in seconds.'],
                ['Tell us what works for you', 'Choose your reading pace, voice, and comfortable visual settings.'],
                ['Take Boafo with you', 'Install the browser extension or add the widget to your website.']
              ].map(([title, body], i) => (
                <li key={title} data-reveal>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <ArrowUpRight size={19} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Developer Integration Section */}
        <section id="developers" className="dev-integration-section page-width">
          <div className="dev-card" data-reveal>
            <div className="dev-content">
              <span className="eyebrow">BUILT FOR DEVELOPERS & CREATORS</span>
              <h2>One script tag.<br />Universal accessibility.</h2>
              <p>
                Add the floating accessibility companion to your web application, blog, or store with a single line of HTML. Manage origins, usage quotas, and settings directly from your developer dashboard.
              </p>
              <div className="dev-actions">
                <Button asChild>
                  <Link to="/dashboard/keys">Manage access codes <ArrowUpRight size={16} /></Link>
                </Button>
                <span className="dev-badge"><Sparkles size={14} /> Zero dependencies</span>
              </div>
            </div>
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="w-dot dot-red" />
                  <span className="w-dot dot-amber" />
                  <span className="w-dot dot-green" />
                </div>
                <span className="code-title">index.html</span>
                <button
                  className="copy-btn"
                  onClick={copySnippet}
                  aria-label="Copy embed code"
                >
                  {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="code-block">
                <code>
                  &lt;script defer src="https://boafo-plugin-widget.vercel.app/widget.bundle.js"{'\n'}        data-api-key="YOUR_WEBSITE_CODE"&gt;&lt;/script&gt;
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Community Voices / Testimonials */}
        <section id="community" className="community-section page-width">
          <div className="section-heading text-center" data-reveal>
            <div>
              <span className="eyebrow">COMMUNITY VOICES</span>
              <h2>Designed with care.<br />Trusted by real people.</h2>
            </div>
            <p>Every feature in Boafo was born from real feedback and everyday needs.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.name} data-reveal>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" fill="#16a34a" color="#16a34a" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Our Story Section with Authentic Photo */}
        <section id="about" className="page-width about-section">
          <div className="story-visual" data-reveal>
            <div className="story-image-wrap">
              <img
                src="/story-community.jpg"
                alt="Student smiling while reading digital content with headphones in Accra, Ghana"
                className="story-img"
              />
              <div className="story-badge">
                <span className="story-badge-dot" />
                <span>Digital Drivers Technology · Accra, Ghana</span>
              </div>
            </div>
          </div>
          <div data-reveal>
            <span className="eyebrow">ROOTED IN GHANA. OPEN TO EVERYONE.</span>
            <h2>Independence starts<br />with being included.</h2>
            <p>
              Boafo is built by Digital Drivers Technology, a Ghanaian team committed to making the digital landscape universally welcoming. Our purpose is simple: equip people of all visual, auditory, and neurodivergent abilities to navigate the web with dignity, comfort, and confidence.
            </p>
            <a className="text-link" href="mailto:digitaldriverstechnologies@gmail.com">
              Say hello to the team <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="page-width faq-section">
          <div data-reveal>
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>A few questions,<br />answered.</h2>
            <p>Need a hand? <a href="mailto:digitaldriverstechnologies@gmail.com">We're here to help.</a></p>
          </div>
          <div data-reveal>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="page-width">
          <div className="final-cta" data-reveal>
            <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>A more comfortable web<br />is within reach.</h2>
            <Button asChild size="lg">
              <Link to="/onboarding">Get started with Boafo <ArrowUpRight size={18} /></Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}