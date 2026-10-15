import { Link } from 'react-router-dom';
import Brand from './Brand';
export default function Footer() { return <footer className="site-footer page-width"><div><Brand /><p>A more welcoming web, for all of us.</p></div><nav aria-label="Footer"><a href="/#features">Features</a><a href="mailto:digitaldriverstechnologies@gmail.com">Contact</a><Link to="/privacy">Privacy policy</Link></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} Digital Drivers Technology</span><span>Made with purpose, in Ghana.</span></div></footer>; }
