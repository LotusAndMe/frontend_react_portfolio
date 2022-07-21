import React,{useState} from 'react'
import './Navbar.scss'
import { images } from '../../constants/'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <Link to={`${item}`} spy={true} smooth={true}>{item}</Link>
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
              {['home', 'about', 'work', 'skills', 'testimonial','contact'].map((item) => (
                <li key={item} >
                  <Link to={`${item}`} spy={true} smooth={true} onClick={() => setToggle(false)}>{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar