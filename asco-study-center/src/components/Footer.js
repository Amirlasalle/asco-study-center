import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  const scrollToTop = (url) => {
    window.location.href = url;
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <footer className="mt-3 footer">

      <Link to="/asco-study-center" onClick={() => scrollToTop('/asco-study-center')} className='footer-image'> <Image className='footer-image' src={process.env.PUBLIC_URL + '/assets/ascologo.png'} fluid />
      </Link>
      <br></br>
      <br></br>
      <Link to="/aboutasco" onClick={() => scrollToTop('/aboutasco')} style={{ textDecoration: 'none' }} className='footer-text'>About Asco</Link>
      <br></br>
      <Link to="/products" onClick={() => scrollToTop('/products')} style={{ textDecoration: 'none' }} className='footer-text'>ASCO Products
      </Link>
      <br></br>
      <Link to="/studycenter" onClick={() => scrollToTop('/studycenter')} style={{ textDecoration: 'none' }} className='footer-text'>Study Center</Link>
      <br></br>
      <Link to="/quizcenterone" onClick={() => scrollToTop('/quizcenterone')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 1
      </Link><span>{' - '}</span>
      <Link to="/quizcentertwo" onClick={() => scrollToTop('/quizcentertwo')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 2
      </Link><span>{' - '}</span>
      <Link to="/quizcenterthree" onClick={() => scrollToTop('/quizcenterthree')} style={{ textDecoration: 'none' }} className='footer-text'>Quiz 3
      </Link>
      <br></br>
      <br></br>
      <Link to="/asco-study-center" onClick={() => scrollToTop('/asco-study-center')} style={{ textDecoration: 'none' }} className='footer-text'>©2023, ASCO Power Technologies
      </Link>

    </footer>
  );
};

export default Footer;
