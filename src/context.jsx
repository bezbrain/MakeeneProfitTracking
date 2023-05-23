import React, { useContext, useState } from "react";

const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <appContext.Provider value={{ toggleNav, setToggleNav }}>
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
