import React, { useContext, useEffect } from "react";
import { Darkcontext } from "../context/darkCtx";

interface Props {
  children: (mode: {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  }) => JSX.Element;
}

const DarkMode: React.FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useContext(Darkcontext);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return <div>{children({ isDark, setIsDark })}</div>;
};

export default DarkMode;
