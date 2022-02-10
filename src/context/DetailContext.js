import React, { createContext, useState } from "react";

const Context = createContext({});

export function DetailContextProvider({ children }) {
  const [detail, setDetail] = useState([]);

  return (
    <Context.Provider value={{ detail, setDetail }}>{children}</Context.Provider>
  );
}
export default Context;