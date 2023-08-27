/** @format */

import React,{useContext} from "react";
import styled, { ThemeContext } from "styled-components";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { images } from "../constants";

const message = {
  en: {
    toggle: 'Swap theme day/night',
  },
  ua: {
    toggle: 'Перемкнути тему день/ніч',
  },
};

const ToggleWrapper = styled.div`
  width: 50px;
  height: 25px;
  min-width: 50px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;

  p{
    font-size: 0.65rem;
    transition: transform 0.1s linear;
    transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
  }

`;

const Notch = styled.div`
  position: relative;
  height: 21px;
  width: 21px;
  transition: transform 0.2s ease-in-out;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});

  img{
    position: absolute;
    top:1px;
    left:-3px;
    padding-top:-15px;
    border-radius: 50%;
  }
  `;
  
  // background: ${p=> (p.isActive ? `red`: `blue`)};
const Toggle = ({ isActive, onToggle, state }) => {

  const locate = state.currentLocale;

  return (
    <Tippy content={message[locate].toggle}>
                       
      <ToggleWrapper onClick={onToggle}>
        <Notch isActive={isActive} >
          {isActive ?
            <img style={{ height: "22px", width: "22px" }} src={images.moon} alt="" /> :
            <img style={{ top: '-1px', left: '0px', height: "22px", width: "22px" }} src={images.sun} alt="" />}
        </Notch>
      </ToggleWrapper>
    </Tippy>
  );
};

export default Toggle;
