/** @format */

import React, { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";
import Store from "./Store";
import AppWrapper from "./wrapper/AppWrapper";

const GlobalStyle = createGlobalStyle`

:root {
  --font-base: "DM Sans", sans-serif;
   --primary-color: #edf2f8;
  --secondary-color: #313bac;
  --black-color: #030303;
  --lightGray-color: #e4e4e4;
  --gray-color: #6b7688;
  --brown-color: #46364a;
  --white-color: #ffffff;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);

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
            <GlobalStyle />
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
          </div>
        </AppWrapper>
      </Store>
    </ThemeProvider>
  );
};

export default App;
