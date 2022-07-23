/** @format */

import React, { useContext } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { Context } from "../Store";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const [state, setState] = useContext(Context);
    const locale = state.currentLocale;

    return (
      <div id={idName} className={`app__container ${classNames}`}>
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
