import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/components/AuthLayout';
import API from '@/lib/axios';
import { saveToken } from '@/lib/authHelpers';
const copy = {
 signup: ['Make yourself at home.', 'Create your account. We’ll help you find the right tools.'],
 login: ['Good to have you back.', 'Sign in to your personal Boafo workspace.'],
 verify: ['Check your inbox.', 'Enter the six-digit code we sent to verify your email.'],
 forgot: ['Let’s get you back in.', 'We’ll send a reset code if your email has an eligible account.'],
 reset: ['A fresh start.', 'Use your reset code to choose a new password.'],
};
export default function AccountForm({ mode }) {
  const navigate = useNavigate(); const [params] = useSearchParams();
  const [form,setForm] = useState({ name:'', email: params.get('email') || sessionStorage.getItem('boafo-pending-email') || '', password:'', confirmPassword:'', code:'' });
  const [busy,setBusy] = useState(false); const [error,setError] = useState(''); const [notice,setNotice] = useState(''); const [show,setShow] = useState(false); const [cooldown,setCooldown] = useState(0);
  useEffect(() => { if (!cooldown) return; const timer = setTimeout(() => setCooldown(cooldown-1),1000); return () => clearTimeout(timer); },[cooldown]);
  const update = e => setForm(s => ({...s,[e.target.name]:e.target.value}));
  const finish = data => { saveToken(data.accessToken || data.token); sessionStorage.removeItem('boafo-pending-email'); navigate(data.redirectToOnboarding === false ? '/dashboard' : '/onboardingFlow',{replace:true}); };
  const submit = async e => {
    e.preventDefault(); if (busy) return; setError(''); setNotice('');
    if ((mode === 'signup' || mode === 'reset') && form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }
    setBusy(true);
    try {
      const email = form.email.trim().toLowerCase();
      if (mode === 'signup') { await API.post('/users/register',{name:form.name.trim(),email,password:form.password}); sessionStorage.setItem('boafo-pending-email',email); navigate('/verify-otp'); }
      if (mode === 'login') { const {data} = await API.post('/users/login',{email,password:form.password}); finish(data); }
      if (mode === 'verify') { const {data} = await API.post('/users/verify-otp',{email,otp:form.code}); finish(data); }
      if (mode === 'forgot') { await API.post('/users/forgotPassword',{email}); sessionStorage.setItem('boafo-pending-email',email); navigate('/reset-password'); }
      if (mode === 'reset') { await API.post('/users/resetPassword',{email,resetCode:form.code,newPassword:form.password,confirmPassword:form.confirmPassword}); setNotice('Password updated. You can now sign in.'); setForm(s => ({...s,password:'',confirmPassword:'',code:''})); }
    } catch(err) {
      if (err.response?.data?.redirectToVerification) { sessionStorage.setItem('boafo-pending-email',form.email.trim().toLowerCase()); navigate('/verify-otp'); }
      else setError(err.response?.data?.message || 'We could not connect. Check your connection and try again.');
    } finally {setBusy(false);}
  };
  const resend = async () => { setBusy(true);setError('');setNotice('');try {await API.post('/users/resend-otp',{email:form.email.trim().toLowerCase()});setNotice('Check your inbox for a new code.');setCooldown(60);} catch(err){setError(err.response?.data?.message || 'Could not send a code. Try again.');} finally{setBusy(false);} };
  const google = async response => {setBusy(true);setError('');try{const {data}=await API.post('/users/google-auth',{token:response.credential});finish(data);}catch(err){setError(err.response?.data?.message || 'Google sign-in failed.');}finally{setBusy(false);} };
  const passwordField = (label,name,confirm=false) => <div className="form-field"><label htmlFor={name}>{label}</label><div className="password-field"><Input id={name} name={name} type={show?'text':'password'} value={form[name]} onChange={update} required minLength={mode==='login'?1:8} maxLength={128} autoComplete={mode==='login'?'current-password':'new-password'} aria-describedby={!confirm && mode!=='login'?'password-help':undefined}/>{!confirm&&<button type="button" onClick={()=>setShow(!show)} aria-label={show?'Hide password':'Show password'}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button>}</div>{!confirm&&mode!=='login'&&<span id="password-help" className="field-hint">At least 8 characters. Spaces are allowed.</span>}</div>;
  return <AuthLayout title={copy[mode][0]} description={copy[mode][1]}><form className="account-form" onSubmit={submit}>
    {mode==='signup'&&<div className="form-field"><label htmlFor="name">Your name</label><Input id="name" name="name" autoComplete="name" value={form.name} onChange={update} minLength={2} maxLength={100} required/></div>}
    <div className="form-field"><label htmlFor="email">Email address</label><Input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} maxLength={254} required/></div>
    {(mode==='verify'||mode==='reset')&&<div className="form-field"><label htmlFor="code">{mode==='verify'?'Verification':'Reset'} code</label><Input id="code" name="code" className="otp-input" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" minLength={6} maxLength={6} value={form.code} onChange={update} placeholder="000000" required/><span className="field-hint">Codes expire after 10 minutes.</span></div>}
    {(mode==='login'||mode==='signup'||mode==='reset')&&passwordField(mode==='reset'?'New password':'Password','password')}
    {(mode==='signup'||mode==='reset')&&passwordField('Confirm password','confirmPassword',true)}
    {mode==='login'&&<Link className="forgot-link" to="/forgot-password">Forgot password?</Link>}
    {error&&<p role="alert" className="form-error">{error}</p>}{notice&&<p role="status" className="form-notice">{notice}</p>}
    <Button type="submit" disabled={busy} className="form-submit">{busy?<Loader2 className="animate-spin"/>:null}{({signup:'Create account',login:'Sign in',verify:'Verify email',forgot:'Send reset code',reset:'Update password'})[mode]}<ArrowRight/></Button>
  </form>
  {mode==='verify'&&<Button variant="ghost" className="resend-button" disabled={busy||cooldown>0} onClick={resend}>{cooldown?`Request another code in ${cooldown}s`:'Send a new code'}</Button>}
  {(mode==='signup'||mode==='login')&&import.meta.env.VITE_GOOGLE_CLIENT_ID&&<div className="google-signin"><span>or continue with Google</span><GoogleLogin onSuccess={google} onError={()=>setError('Google sign-in failed. Please try email instead.')} theme="outline" shape="rectangular"/></div>}
  <p className="auth-switch">{mode==='signup'?<>Already have an account? <Link to="/login">Sign in</Link></>:mode==='login'?<>New to Boafo? <Link to="/onboarding">Create an account</Link></>:<Link to="/login">Return to sign in</Link>}</p>
  </AuthLayout>;
}
