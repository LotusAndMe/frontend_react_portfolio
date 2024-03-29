/** @format */

import styled from "styled-components";

const NavWrap = styled.nav`
  select {
    width: 50px;
    height: 25px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 1rem;
  }
  .myFeatures {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  @media screen and (min-width: 900px) {
    .myFeatures {
      display: flex;
      flex-direction: row;
    }
    select {
      margin: 1rem;
    }
  }

  .app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 2rem;
    background: ${(p) => p.theme.navBgColor};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    z-index: 2;
    opacity: 0.9;
  }
  .app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .app__navbar-logo img {
    width: 75px;
    height: 75px;
    box-shadow: 0 0 25px ${(p) => p.theme.primaryColor};
  }
  @media screen and (min-width: 2000px) {
    .app__navbar-logo img {
      width: 150px;
      height: 150px;
    }
  }
  .app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  .app__navbar-links li {
    margin: 0 1rem;
    cursor: pointer;
    flex-direction: column;
  }
  .app__navbar-links li div {
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .app__navbar-links li a {
    color: ${(p) => p.theme.linkColor};
    text-decoration: none;
    flex-direction: column;
    text-transform: uppercase;
    font-size:1.2rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }
  .app__navbar-links li a:hover {
    color: ${(p) => p.theme.linkHoverColor};
    text-shadow: 1px 1px 1px ${(p) => p.theme.linkHoverColor};
  }
  .app__navbar-links li:hover div {
    background: ${(p) => p.theme.navHoverColor};
    /* primary */
  }
  @media screen and (max-width: 900px) {
    .app__navbar-links {
      display: none;
    }
  }
  .app__navbar-menu {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(p) => p.theme.secondaryColor};
    opacity: 1;
  }
  .app__navbar-menu svg {
    width: 70%;
    height: 70%;
    color: ${(p) => p.theme.whiteColor};
  }
  .app__navbar-menu div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    padding: 1rem;
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    background-color: ${(p) => p.theme.sideBgColor};
    background-size: cover;
    background-repeat: repeat;
    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
  }
  .app__navbar-menu div svg {
    width: 35px;
    height: 35px;
    color: ${(p) => p.theme.linkHoverColor};
    margin: 0.5rem 1rem;
  }
  .app__navbar-menu div ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .app__navbar-menu div li {
    margin: 1rem;
  }
  .app__navbar-menu div li a {
    color: ${(p) => p.theme.linkColor};
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .app__navbar-menu div li a:hover {
    color: ${(p) => p.theme.linkHoverColor};
  }
  @media screen and (min-width: 900px) {
    .app__navbar-menu div {
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    .app__navbar-menu {
      display: none;
    }
  }
`;

export default NavWrap;
