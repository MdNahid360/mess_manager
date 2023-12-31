import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "user-1" });
  const [sideBarOn, setSideBarOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [themeButton, setThemeButton] = useState(false);
  const [theme, setTheme] = useState(false);
  const [tModalOpen, setTModalOpen] = useState(false);

  const handleOpen = () => setTModalOpen(!tModalOpen);
  const themeAction = (theme) => {
    setTheme(theme)
    return localStorage.setItem('theme', theme);
  }
  const getTheme = localStorage.getItem('theme');
  useEffect(() => {
    if (getTheme === 'dark') {
       
    setTheme(true);
 } else if (getTheme === 'light') {
   setTheme(false);
 }
  })

   useEffect(() => {
    document.body.style.backgroundColor = theme ? '#1e1e1e' : '#ffffff';
  }, [theme]);
  const info = {
    setSideBarOn,
    sideBarOn,
    open,
    setOpen,
    themeButton,
    setThemeButton,
    theme,
    setTheme,
    themeAction,
    user,
    tModalOpen,
    setTModalOpen,
    handleOpen
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
