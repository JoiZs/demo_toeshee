import React, { createContext, useState } from "react";

export const Darkcontext = createContext<any>(false);

const DarkCtx = (props: any) => {
  let colorModeStore = sessionStorage.getItem("colorMode");
  const [darkMode, setDarkMode] = useState<boolean>(
    !!colorModeStore ? colorModeStore === "dark" : false
  );
  return (
    <Darkcontext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </Darkcontext.Provider>
  );
};

export default DarkCtx;
