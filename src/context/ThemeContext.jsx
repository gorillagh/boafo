import { createContext, useContext, useEffect } from 'react';
const ThemeContext=createContext({theme:'light',toggleTheme:()=>{}});
export function ThemeProvider({children}) {useEffect(()=>{document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');},[]);return <ThemeContext.Provider value={{theme:'light',toggleTheme:()=>{}}}>{children}</ThemeContext.Provider>;}
export const useTheme=()=>useContext(ThemeContext);
