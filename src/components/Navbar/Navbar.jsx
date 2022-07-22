import React,{useState,useContext} from 'react'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import Toggle from '../Toggle'
import styled, { ThemeContext } from 'styled-components';

const message = {
  en: {
    mainManu: ['home', 'about', 'work', 'skills','testimonial', 'contact'],
  },
  ua: {
    mainManu: ['домашня', 'про мене', 'роботи', 'навички','відгуки', 'звязок'],
  },
};

const NavWrap = styled.nav`
  .app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: ${p=>p.theme.primaryColor};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    z-index: 2;
  }
  .app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .app__navbar-logo img {
    width: 75px;
    height: 75px;
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
    color: ${(p) => p.theme.thirdColor};
    text-decoration: none;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
  .app__navbar-links li a:hover {
    color: var(--secondary-color);
  }
  .app__navbar-links li:hover div {
    background: var(--secondary-color);
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
    background: var(--secondary-color);
  }
  .app__navbar-menu svg {
    width: 70%;
    height: 70%;
    color: var(--white-color);
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
    background: url("../../assets/bgWhite.webp");
    background-color: var(--white-color);
    background-size: cover;
    background-repeat: repeat;
    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);
  }
  .app__navbar-menu div svg {
    width: 35px;
    height: 35px;
    color: var(--secondary-color);
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
    color: var(--gray-color);
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
  }
  .app__navbar-menu div li a:hover {
    color: var(--secondary-color);
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



const Navbar = ({ locale, handleChange }) => {
  const [toggle, setToggle] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  console.log(id);
  
  return (
    <NavWrap >
      <nav className="app__navbar">
  
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
  
          <select onChange={handleChange} defaultValue={locale}>
            {['en', 'ua'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>

          <Toggle isActive={id==='dark'} onToggle={setTheme}/>
  
        </div>
        <ul className='app__navbar-links'>
          {message[locale].mainManu.map((item, index) => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div />
              <Link to={`${message.en.mainManu[index]}`} spy={true} smooth={true}>{item}</Link>
            </li>
          ))}
        </ul>
  
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
  
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
  
              <ul >
                {message[locale].mainManu.map((item, index) => (
                  <li key={item} >
                    <Link to={`${message.en.mainManu[index]}`} spy={true} smooth={true} onClick={() => setToggle(false)}>{item}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
  
      </nav>
    </NavWrap>
  )
};

export default Navbar