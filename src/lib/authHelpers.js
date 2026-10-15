import { clearCache } from '@/context/dashboard/DashboardCache';
export const saveToken = token => { if(typeof token!=='string'||!token) throw new Error('No session received.'); localStorage.removeItem('accessToken'); clearCache(); sessionStorage.setItem('accessToken',token); };
export const getToken = () => {const token=sessionStorage.getItem('accessToken');if(token)return token;const previous=localStorage.getItem('accessToken');if(previous){sessionStorage.setItem('accessToken',previous);localStorage.removeItem('accessToken');return previous;}return null;};
export const clearToken = () => {sessionStorage.removeItem('accessToken');localStorage.removeItem('accessToken');clearCache();};
export function performLogout(navigate,setUser=null){clearToken();if(setUser)setUser(null);navigate('/login',{replace:true});}
export const openChromeExtensionStore = url => window.open(url,'_blank','noopener,noreferrer');
