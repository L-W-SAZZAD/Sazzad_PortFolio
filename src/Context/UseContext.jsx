import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function UseContext({ children }) {
  const [mode, setMode] = useState(false);

  // authInfo
  const authInfo = { mode, setMode };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
