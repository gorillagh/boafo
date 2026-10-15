import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '@/lib/axios';
import { clearToken } from '@/lib/authHelpers';
export const DashboardContext=createContext();
export function DashboardProvider({children}){
 const navigate=useNavigate();const [data,setData]=useState({user:null,usage:[],keys:[]});const [loading,setLoading]=useState(true);const [error,setError]=useState('');
 const fetchData=useCallback(async()=>{setLoading(true);setError('');try{const {data:result}=await API.get('/users/userDashboard');setData({user:result.user,usage:result.usage||[],keys:result.keys||[]});return true;}catch(error){if(error.response?.status===401){clearToken();navigate('/login',{replace:true});}setError(error.response?.data?.message||'Your workspace could not be loaded. Please try again.');return false;}finally{setLoading(false);}},[navigate]);
 const logout=useCallback(async()=>{try{await API.post('/users/logout');}finally{clearToken();setData({user:null,usage:[],keys:[]});navigate('/login',{replace:true});}},[navigate]);
 useEffect(()=>{fetchData();},[fetchData]);
 return <DashboardContext.Provider value={{...data,loading,error,logout,plan:data.user?.plan||'free',fetchDashboardData:fetchData}}>{children}</DashboardContext.Provider>;
}
