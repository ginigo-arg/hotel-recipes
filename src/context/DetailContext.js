import React, { createContext, useState } from "react";

const Context = createContext({});

export function DetailContextProvider({ children }) {
  const [detail, setDetail] = useState([]);
  const [prevLocation, setLocation] = useState("/")

  return (
    <Context.Provider value={{ detail, setDetail, prevLocation, setLocation }}>{children}</Context.Provider>
  );
}
export default Context;