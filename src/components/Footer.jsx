import React from 'react'
import { FaYoutube,  FaInstagram, FaTiktok, FaFacebookF, FaTwitter, FaRegCopyright  } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href='https://www.youtube.com/@PROFESSORTIGER' target='blank'> <FaYoutube size={40}/> </a>
                </li>
                <li className='nav-item'>
                    <a href='https://www.instagram.com/professortiger_official' target='blank'> <FaInstagram size={40}/> </a>
                </li>
                <li className='nav-item'>
                    <a href='https://www.tiktok.com/@professortiger_official' target='blank'> <FaTiktok size={40}/> </a>
                </li>
                <li className='nav-item'>
                    <a href='/'> <FaFacebookF size={40}/> </a>
                </li>
                <li className='nav-item'>
                    <a href='/'> <FaTwitter size={40}/> </a>
                </li>
            </ul>
            <div className='bottom'>
                <p size={12}> <FaRegCopyright size={13}/> Professor Tiger Inc. All rights reserved.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
