/** @format */

import React, { useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  const [locale, setLocale] = useState("en");
  const handleChangeLocale = (e) => {
    setLocale(e.target.value);
  };

  return (
    <div className="app">
      <Navbar locale={locale} handleChange={handleChangeLocale} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
