import React,{createContext,useState,useEffect,useContext} from 'react';
const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme,setTheme] =  useState(JSON.parse(localStorage.getItem("theme")) || false);
    
  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider
