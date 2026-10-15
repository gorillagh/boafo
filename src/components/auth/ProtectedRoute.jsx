import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import API from '@/lib/axios';
import { clearToken, getToken } from '@/lib/authHelpers';
export default function ProtectedRoute({children}){
 const [state,setState]=useState({loading:true,user:null,error:''});const [attempt,setAttempt]=useState(0);const location=useLocation();
 useEffect(()=>{let active=true;if(!getToken()){setState({loading:false,user:null,error:''});return;}
 API.get('/users/me').then(({data})=>{if(active)setState({loading:false,user:data.user,error:''});}).catch(error=>{if(!active)return;if(error.response?.status===401){clearToken();setState({loading:false,user:null,error:''});}else setState({loading:false,user:null,error:error.response?.data?.message||'Could not verify your session. Please try again.'});});return()=>{active=false;};},[attempt,location.pathname]);
 if(state.loading)return <div className="page-loading" role="status">Opening your space…</div>;
 if(state.error)return <div className="page-loading"><p role="alert">{state.error}</p><Button onClick={()=>setAttempt(attempt+1)}>Try again</Button><Button variant="ghost" onClick={()=>{clearToken();window.location.assign('/login');}}>Sign in again</Button></div>;
 if(!state.user)return <Navigate to="/login" replace/>;
 if(!state.user.onboardingComplete&&location.pathname.startsWith('/dashboard'))return <Navigate to="/onboardingFlow" replace/>;
 return children||<Outlet/>;
}
