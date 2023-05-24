import React, { useContext, useState } from "react";

const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [goTopIcon, setGoTopIcon] = useState("");

  return (
    <appContext.Provider
      value={{ toggleNav, setToggleNav, goTopIcon, setGoTopIcon }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
