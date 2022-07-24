import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.css';

// import FooterWrap from './../../wrapper/FooterWrap';

const Footer = () => {
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
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:myindexukrnet@gmail.com" className="p-text"><span style={{color:'black'}}>Mail me Now:</span> myindexukrnet@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+380634909557" className="p-text"><span style={{color:'black'}}>Phone me Now:</span> +380634909557</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit} style={{color:'white'}}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <h3 className="head-text">
            Thank you for getting in touch!
            </h3>
            <button onClick={() => setIsFormSubmitted(false)} type='button' className='p-text' style={{color:'white'}}>Send one more message</button>
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
