import React from 'react';


const Footer = () => {

  return (
    <div>
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">

        <h4>
          Thank you for visiting my page! {' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          Hope to connect with you soon!
        </h4>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
