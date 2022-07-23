/** @format */

import React, { useContext } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { Context } from "../Store";
import { ThemeContext } from "styled-components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const [state, setState] = useContext(Context);
    const locale = state.currentLocale;
    const { id, setTheme } = useContext(ThemeContext);
    const bgColor = id === "light" ? "#e4e4e4" : "#030303";

    return (
      <div
        id={idName}
        className={`app__container ${classNames}`}
        style={idName === "home" ? { background: bgColor } : {}}
      >
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component locale={locale} />

          <div className="copyright">
            <p className="p-text">@2022 Andrew</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
