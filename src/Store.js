/** @format */

import React, { useState } from "react";
import useLocalStorage from "./utils/useLocalStorage";

const initialState = {
  locale: ["en", "ua", "ru"],
  currentLocale: "en",
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useLocalStorage("state", initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
