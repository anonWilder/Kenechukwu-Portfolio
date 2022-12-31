import React from 'react'
import {BsFacebook, BsLinkedin, BsMedium} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://medium.com" target="_blank"><BsMedium/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
        <a href="https://medium.com" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials