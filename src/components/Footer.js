import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='SocialMedia'>
       <Link to={"www.instagram.com"}> <InstagramIcon/></Link> <WhatsAppIcon/> <FacebookIcon/> <LinkedIn/>
      </div>
      <p>&copy; 2024 Vigneshpizza.com</p>
    </div>
  )
}

export default Footer;
