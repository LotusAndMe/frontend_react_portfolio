/** @format */

import React, { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
// import "./App.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";
import Store from "./Store";

import styled from "styled-components";

const AppWrapper = styled.div`
  .app {
    background-color: var(--primary-color);
    font-family: var(--font-base);
  }
  .app__whitebg {
    background-color: var(--white-color);
  }
  .app__primarybg {
    background-color: var(--primary-color);
  }
  .app__container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }
  .app__flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app__wrapper {
    flex: 1;
    width: 100%;
    flex-direction: column;
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 450px) {
    .app__wrapper {
      padding: 4rem 1rem 2rem;
    }
  }
  .copyright {
    width: 100%;
    padding: 2rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .copyright p {
    text-transform: uppercase;
    color: var(--black-color);
  }
  .head-text {
    font-size: 2.75rem;
    font-weight: 800;
    text-align: center;
    color: var(--black-color);
    text-transform: capitalize;
  }
  .head-text span {
    color: var(--secondary-color);
  }
  @media screen and (min-width: 2000px) {
    .head-text {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 450px) {
    .head-text {
      font-size: 2rem;
    }
  }
  .p-text {
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;
  }
  @media screen and (min-width: 2000px) {
    .p-text {
      font-size: 1.75rem;
    }
  }
  .bold-text {
    font-size: 1rem;
    font-weight: 800;
    color: var(--black-color);
    text-align: left;
  }
  @media screen and (min-width: 2000px) {
    .bold-text {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 450px) {
    .bold-text {
      font-size: 0.9rem;
    }
  }
  .app__social {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
  .app__social div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--white-color);
    margin: 0.25rem 0;
    border: 1px solid var(--lightGray-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
  .app__social div svg {
    width: 15px;
    height: 15px;
    color: var(--gray-color);
  }
  .app__social div:hover {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
  .app__social div:hover svg {
    color: var(--white-color);
  }
  @media screen and (min-width: 2000px) {
    .app__social div {
      width: 70px;
      height: 70px;
      margin: 0.5rem 0;
    }
    .app__social div svg {
      width: 30px;
      height: 30px;
    }
  }
  .app__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
  .app__navigation .app__navigation-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #cbcbcb;
    margin: 0.5rem;
    transition: background-color 0.2s ease-in-out;
  }
  .app__navigation .app__navigation-dot:hover {
    background-color: var(--secondary-color);
  }
  @media screen and (min-width: 2000px) {
    .app__navigation .app__navigation-dot {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    .app__navigation,
    .app__social {
      display: none;
    }
    .copyright {
      padding: 2rem;
    }
  }
`;

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
  // const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState(LightTheme);
  // const handleChangeLocale = (e) => {
  //   setLocale(e.target.value);
  // };

  // console.log(locale);

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
