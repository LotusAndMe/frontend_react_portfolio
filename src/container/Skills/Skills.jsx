import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import {SkillsWrap} from './../../wrapper/';

const message = {
  en: {
    message1: 'Skills And Experience',
  },
  ua: {
    message1: 'Навички Та Досвід',
  },
};

const Skills = ({locale}) => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const desctitle = `desc${locale}`
  const nametitle = `name${locale}`
  const companytitle=`company${locale}`

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <SkillsWrap>
      <h2 className="head-text">{message[locale].message1}</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill,index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill+index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences
            .sort((a,b)=>a.year-b.year)
            .map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year+index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works
                  .map((work, index) => (
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                     key={work+index}
                    >
                      <Tippy content={work[desctitle]}>
                        <div>
                          <h4 className="bold-text">{work[companytitle]}</h4>
                          <p className="p-text">{work[nametitle]}</p>
                        </div>
                      </Tippy>
                    </motion.div>

                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SkillsWrap>
  );
};


export default AppWrap(
  MotionWrap(Skills,'app__skills')
  , 'skills',
  'app__whitebg'
)