import React,{useState,useEffect} from 'react'

import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap , MotionWrap} from '../../wrapper';
import {AboutWrap} from './../../wrapper/';


const message = {
  en: {
    headtext1: 'I Know That',
    headtext2: 'Good Dev',
    headtext3: 'Means',
    headtext4: 'Good Business',
    secondmessage:'Andrew',
    profession: 'WEB DEVELOPER',
    company: 'FREELANCER',
    
  },
  ua: {
    headtext1: 'Я знаю що ',
    headtext2: 'Гарна розробка',
    headtext3: 'Означає',
    headtext4: 'Гарний Бізнесс',
   firstmessage: 'Я знаю що',
    secondmessage:'Андрій',
    profession: 'ВЕБ РОЗРОБНИК',
    company: 'вільний до найму',
  },
};




const About = ({locale}) => {

  const [abouts, setAbouts] = useState([]);


  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
       
  }, [])

  const title = `title${locale}`;
  const description = `description${locale}`;
  
  
  return (

    <AboutWrap>
      <h2 className='head-text'>{`${message[locale].headtext1}`} <span>{`${message[locale].headtext2}`}</span><br />{`${message[locale].headtext3} `} <span>{`${message[locale].headtext4}`}</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
         
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about + index}
          >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about[title]}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about[description]}</p>
          </motion.div>
        ))}
      </div>
    </AboutWrap>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about')
  , 'about',
  'app__whitebg'
)