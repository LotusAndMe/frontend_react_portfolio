/** @format */

import React, { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
// import "./App.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";
import Store from "./Store";
import AppWrapper from "./wrapper/AppWrapper";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

:root {
  --font-base: "DM Sans", sans-serif;
  
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
