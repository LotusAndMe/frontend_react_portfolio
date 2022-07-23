import React,{useState,useContext} from 'react'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import Toggle from '../Toggle'
import styled, { ThemeContext } from 'styled-components';
import { Context } from '../../Store'
import { NavWrap } from '../../wrapper/'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'


const message = {
  en: {
    mainManu: ['home', 'about', 'work', 'skills', 'testimonial', 'contact'],
    language:'Change to other language',
  },
  ua: {
    mainManu: ['домашня', 'про мене', 'роботи', 'навички', 'відгуки', 'звязок'],
    language:'Оберіть щоб змінити мову',
  },
};




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  const [state, setState] = useContext(Context);
 


  const handleChange = (e) => {
    setState(prevState => {
      return {...prevState, currentLocale:e.target.value}
    })
  }



  return (
    <NavWrap >
      <nav className="app__navbar">
  
        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
  
          
          <div className="myFeatures">
            <Tippy content={message[state.currentLocale].language}>
              <select onChange={handleChange} defaultValue={state.locale[0]} >
                {state.locale.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Tippy>
            <Toggle isActive={id === 'dark'} onToggle={setTheme} state={ state} />
          </div>
  
        </div>
        <ul className='app__navbar-links'>
          {message[state.currentLocale].mainManu.map((item, index) => (
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
                {message[state.currentLocale].mainManu.map((item, index) => (
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