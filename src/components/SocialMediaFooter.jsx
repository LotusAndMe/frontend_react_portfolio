import React from 'react'
import { BsLinkedin, BsInstagram, BsTelegram, BsGithub, } from 'react-icons/bs'
import {  FaFacebookF } from 'react-icons/fa'


const SocialMediaFooter = () => {
    return (
        <div className='app__social-footer'>
            <div>
                <a href="https://www.linkedin.com/in/andrii-okhrimenko-77b8991a0/" target='_blank' rel='noreferrer'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/andrey.okhrimenko.7/" target='_blank' rel='noreferrer'>
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/andrey.okhrimenko.7/" target='_blank' rel='noreferrer'>
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://t.me/AndreyOkhrimenko" target='_blank' rel='noreferrer'>
                    <BsTelegram />
                </a>
            </div>
            <div>
                <a href="https://github.com/LotusAndMe" target='_blank' rel='noreferrer'>
                    <BsGithub />
                </a>
            </div>
        </div>
    )
}

export default SocialMediaFooter