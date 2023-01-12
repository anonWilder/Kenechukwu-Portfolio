import React from 'react'
import {BsFacebook, BsLinkedin, BsMedium} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/kenechukwu-egbonu-640748230/" target="_blank"><BsLinkedin/></a>
        <a href="https://medium.com/@austineokafor.e" target="_blank"><BsMedium/></a>
        <a href="https://web.facebook.com/julys.august/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/anonWilder/" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials