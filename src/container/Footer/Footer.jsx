import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.css';
import {SocialMediaFooter} from './../../components/';

const messaget = {
  en: {
    message1: 'Take a coffee & chat with me',
    message2: 'Mail me Now:',
    message3: 'Phone me Now:',
    message4: 'Your Name',
    message5: 'Your Email',
    message6: 'Your Message',
    message7: 'Send Message',
    message8: 'Sending...',
    message9: 'Thank you for getting in touch!',
    message10: 'Send one more message',
  },
  ua: {
    message1: "Візьміть чашку кави та звя'жіться зі мною",
    message2: 'Написати листа зараз:',
    message3: 'Зателефонувати зараз:',
    message4: 'Ваше ім`я',
    message5: 'Ваше імейл',
    message6: 'Ваше повідомлення',
    message7: 'Надіслати повідомлення',
    message8: 'Надсилаю...',
    message9: 'Дякую, будемо на зв`язку!',
    message10: 'Надіслати ще одне повідомлення',
  },
};

const Footer = ({ locale }) => {
  
  const initialData = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initialData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    
    setFormData(initialData);
  };


  return (

    <>
      <h2 className="head-text">{messaget[locale].message1}</h2>

      <SocialMediaFooter/>
      
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:myindexukrnet@gmail.com" className="p-text"><span style={{color:'black'}}>{messaget[locale].message2}</span> myindexukrnet@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+380634909557" className="p-text"><span style={{color:'black'}}>{messaget[locale].message3}</span> +380634909557</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder={messaget[locale].message4} name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder={messaget[locale].message5} name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder={messaget[locale].message6}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit} style={{color:'white'}}>{!loading ? messaget[locale].message7 : messaget[locale].message8}</button>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <h3 className="head-text">
          {messaget[locale].message9}
            </h3>
            <button onClick={() => setIsFormSubmitted(false)} type='button' className='p-text' style={{color:'white'}}>{messaget[locale].message10}</button>
        </div>
      )}
      </>

  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
