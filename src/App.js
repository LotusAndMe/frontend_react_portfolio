/** @format */

import React, { useState, Suspense } from "react";
import { Navbar, Spinner } from "./components";
import { ThemeProvider } from "styled-components";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";
import Store from "./Store";
import AppWrapper from "./wrapper/AppWrapper";
import { GlobalStyle } from "./constants/GlobalStyle";
import {
  About,
  Footer,
  Header,
  Testimonial,
  Work,
  Skills,
} from "./constants/lazy-loading";
import useLocalStorage from "./utils/useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <Store>
        <AppWrapper>
          <div className="app">
            <Suspense fallback={<Spinner position="app" />}>
              <GlobalStyle />
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <Testimonial />
              <Footer />
            </Suspense>
          </div>
        </AppWrapper>
      </Store>
    </ThemeProvider>
  );
};

export default App;
