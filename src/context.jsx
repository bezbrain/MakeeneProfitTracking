import React, { useContext, useState } from "react";
import { useRef } from "react";

const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [goTopIcon, setGoTopIcon] = useState("");
  const scrollServiceRef = useRef(null);
  // console.log(scrollServiceRef.current);

  return (
    <appContext.Provider
      value={{
        toggleNav,
        setToggleNav,
        goTopIcon,
        setGoTopIcon,
        scrollServiceRef,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
