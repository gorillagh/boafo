import { Link } from 'react-router-dom';
export default function Brand({ to = '/' }) { return <Link to={to} className="brand" aria-label="Boafo home"><img src="/logo-green.png" alt="" /><span>boafo<span className="brand-dot">.</span></span></Link>; }
