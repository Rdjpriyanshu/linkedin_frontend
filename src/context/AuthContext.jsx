// require("dotenv").config()
import React, { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = import.meta.env.VITE_BACKEND_URL;
  let value = {
    serverUrl,
  };
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
