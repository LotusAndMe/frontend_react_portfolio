import React from 'react'

import {HeaderWrap} from './../../wrapper/';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from './../../wrapper/';
import MotionWrap from './../../wrapper/MotionWrap';




const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}

const message = {
  en: {
    hi: 'Hello I am',
    name:'Andrew',
    profession: 'WEB DEVELOPER',
    company: 'FREELANCER',
    
  },
  ua: {
   hi: 'Привіт, мене звати',
    name:'Андрій',
    profession: 'ВЕБ РОЗРОБНИК',
    company: 'вільний до найму',
  },
};

const Header = ({locale}) => {


  return (

    <HeaderWrap>
      <div className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>{`${message[locale].hi}`}</p>
                <h1 className='head-text'>{message[locale].name }</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="t-text">{message[locale].profession }</p>
              <p className="t-text">{message[locale].company }</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__header-img'
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
            </div>
          ))}
        </motion.div>
      </div>
    </HeaderWrap>
  )
}

export default AppWrap(Header, 'home','app__darkbg');

// export default AppWrap(
//   MotionWrap(Header,'app__header')
//   , 'header',
//   'app__darkbg'
// )