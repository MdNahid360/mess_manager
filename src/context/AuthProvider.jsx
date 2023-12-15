import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "user-1" });
  const [sideBarOn, setSideBarOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [themeButton, setThemeButton] = useState(false);
  const [theme, setTheme] = useState(false);

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

  console.log(theme);
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
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
