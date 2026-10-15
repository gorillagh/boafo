import { Link } from 'react-router-dom';
import Brand from './Brand';
import { Button } from './ui/button';
export default function NotFound(){return <main className="page-loading"><Brand/><h1 style={{fontSize:32}}>This page took a different path.</h1><p>Let’s get you back to Boafo.</p><Button asChild><Link to="/">Return home</Link></Button></main>;}
