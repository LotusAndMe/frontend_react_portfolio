import React, {useState, useEffect} from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import MotionWrap from './../../wrapper/MotionWrap';
import {WorkWrap} from '../../wrapper'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Context } from './../../Store';


const message = {
  en: {
    message1: 'My Creative',
    message2:'Portfolio',
    message3: 'Section',
    
  },
  ua: {
    message1: 'Моє креативне',
    message2:'Портфоліо',
    message3: 'Розділ',
  },
};

const Work = ({locale}) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const {id} = useContext(ThemeContext);
  const h2_header = id === 'light' ? { color: "black" } : { color: 'white' }; 
  const titlelang = `title${locale}`;
  const descriptionlang = `description${locale}`;
  const tagsLocal = ['UI/UX', 'Web App', 'Mobile App', 'React JS','Next JS 13', 'All']

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);

    })
  }, [])
  
  
  useEffect(() => {
    const query = '*[_type == "tags"]';

    client.fetch(query).then((data) => {
      const tagsF = Object.values(data).map(tag=>tag.name)
      console.log(tagsF)
      setTags(tagsF.sort());
    })
   },[])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }])
    
    
    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }
    },500)
  }


  console.log(tags)
  return (
 
    <WorkWrap>
      <>
        <h2 className='head-text' style={h2_header}>{message[locale].message1} <span>{message[locale].message2}</span> { message[locale].message3}</h2>
        
      <div className="app__work-filter">
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter===item?'item-active':''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{opacity:[0,1]} }
                transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{scale:[0 , 1]}}
                    whileHover={{scale:[1 , 0.9]} }
                    transition={{duration:0.25}}
                    className='app__flex'
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{scale:[0 , 1]}}
                    whileHover={{scale:[1 , 0.9]} }
                    transition={{duration:0.25}}
                    className='app__flex'
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work[titlelang]}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{ work[descriptionlang] }</p>
              
              <div className="app__work-tag app__flex">
                <p className='p-text'>{ work.tags[0] }</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
</>
      </WorkWrap>
    
  )
}

export default AppWrap(
  MotionWrap(Work,'app__works')
  , 'work',
  'app__primarybg'
)