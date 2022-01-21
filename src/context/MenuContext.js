import React, { createContext, useState } from "react";

const Context = createContext({});

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
}
export default Context;
