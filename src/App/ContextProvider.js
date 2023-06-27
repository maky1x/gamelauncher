import React, { createContext, useState } from "react";

export const ReferenceDataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  return (
    <ReferenceDataContext.Provider value={{ username, setUsername }}>
      {children}
    </ReferenceDataContext.Provider>
  );
};