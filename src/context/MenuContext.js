import React, { createContext, useState } from "react";

const Context = createContext({});

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState([]);
  const [orderOk, setOrderOk] = useState(false);

  return (
    <Context.Provider value={{ menu, setMenu, orderOk, setOrderOk }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
