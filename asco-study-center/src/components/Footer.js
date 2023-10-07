import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <footer className="footer">

      <Link to="/" className='footer-image'> <Image className='footer-image' src={process.env.PUBLIC_URL + '/assets/ascologo.png'} fluid />
      </Link>
      <br></br>
      <br></br>
      <Link to="/aboutasco" style={{ textDecoration: 'none' }} className='footer-text'>About Asco</Link>
      <br></br>
      <Link to="/products" style={{ textDecoration: 'none' }} className='footer-text'>ASCO Products
      </Link>
      <br></br>
      <Link to="/studycenter" style={{ textDecoration: 'none' }} className='footer-text'>Study Center</Link>
      <br></br>
      <Link to="/quizcenterone" style={{ textDecoration: 'none' }} className='footer-text'>Quiz 1 
      </Link><span>{' - '}</span>
      <Link to="/quizcenterone" style={{ textDecoration: 'none' }} className='footer-text'>Quiz 2 
      </Link><span>{' - '}</span>
      <Link to="/quizcenterone" style={{ textDecoration: 'none' }} className='footer-text'>Quiz 3
      </Link>
      <br></br>
      <br></br>
      <Link to="/" style={{ textDecoration: 'none' }} className='footer-text'>©2023, ASCO Power Technologies
      </Link>

    </footer>
  );
};

export default Footer;
