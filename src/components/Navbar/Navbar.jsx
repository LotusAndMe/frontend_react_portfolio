import React,{useState} from 'react'
import './Navbar.scss'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';

const message = {
  en: {
    mainManu: ['home', 'about', 'work', 'skills','testimonial', 'contact'],
  },
  ua: {
    mainManu: ['домашня', 'про мене', 'роботи', 'навички','відгуки', 'звязок'],
  },
};

const Navbar = ({ locale, handleChange }) => {
  const [toggle, setToggle] = useState(false);
  console.log(locale);

  
  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />

        <select onChange={handleChange} defaultValue={locale}>
          {['en', 'ua'].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        
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
  )
};

export default Navbar