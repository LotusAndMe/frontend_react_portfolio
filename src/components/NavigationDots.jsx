import React from 'react'
import { Link } from 'react-scroll'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <Link to={`${item}`} key={item + index} spy={true} smooth={true} className='app__navigation-dot' style={active === item ? { backgroundColor: '#313BAC' } : {}} />
      ))}
    </div>
  )
}

export default NavigationDots