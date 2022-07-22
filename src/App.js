/** @format */

import React, { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

:root {
  --font-base: "DM Sans", sans-serif;
  --primary-color:#fefefe;
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
  const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState(LightTheme);
  const handleChangeLocale = (e) => {
    setLocale(e.target.value);
  };

  console.log(locale);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <div className="app">
        <GlobalStyle />
        <Navbar locale={locale} handleChange={handleChangeLocale} />
        <Header locale={locale} />
        <About locale={locale} />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
