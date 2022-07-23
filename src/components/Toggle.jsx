/** @format */

import React,{useContext} from "react";
import styled, { ThemeContext } from "styled-components";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const message = {
  en: {
    toggle: 'Make Theme Dark',
  },
  ua: {
    toggle: 'Перемкнути на Нічну Тему',
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
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
`;

const Toggle = ({ isActive, onToggle, state }) => {
  const { id, setTheme } = useContext(ThemeContext);
  const locate = state.currentLocale;

  return (
    <Tippy content={message[locate].toggle}>
                       
      <ToggleWrapper onClick={onToggle}>
        <Notch isActive={isActive} />
      </ToggleWrapper>
    </Tippy>
  );
};

export default Toggle;
