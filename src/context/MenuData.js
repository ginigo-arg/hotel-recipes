import React, { createContext, useState } from "react";

const ContextData = createContext({});

export function MenuDataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <ContextData.Provider value={{ data, setData }}>
      {children}
    </ContextData.Provider>
  );
}
export default ContextData;
