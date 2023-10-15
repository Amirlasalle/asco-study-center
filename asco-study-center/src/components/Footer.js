import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  // Define a common click handler for all footer links
  const handleFooterLinkClick = (url) => {
    scrollToTop();
    navigate(url);
  };

  return (
    <footer className="mt-3 footer">
      <Link to="/" onClick={() => scrollToTop('/asco-study-center')} className='footer-image'> <Image className='footer-image' src={process.env.PUBLIC_URL + '/assets/ascologo.png'} fluid />
      </Link>
      <Link to="/aboutasco" onClick={() => handleFooterLinkClick('/aboutasco')} style={{ textDecoration: 'none' }} className='footer-text'>About Asco</Link>
      <br></br>
      <Link to="/products" onClick={() => handleFooterLinkClick('/products')} style={{ textDecoration: 'none' }} className='footer-text'>ASCO Products</Link>
      <br></br>
      <Link to="/studycenter" onClick={() => handleFooterLinkClick('/studycenter')} style={{ textDecoration: 'none' }} className='footer-text'>Study Center</Link>
      <br></br>
      <Link to="/quizcenter" onClick={() => handleFooterLinkClick('/quizcenterone')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz Center</Link>
      <br></br>
      <br></br>
      <Link to="/" onClick={() => handleFooterLinkClick('/')} style={{ textDecoration: 'none' }} className='footer-text'>©2023, ASCO Power Technologies</Link>
    </footer>
  );
};

export default Footer;