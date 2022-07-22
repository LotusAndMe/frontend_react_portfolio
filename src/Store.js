/** @format */

import React, { useState } from "react";

const initialState = {
  locale: ["en", "ua"],
  currentLocale: "en",
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
