import NavigationBar from "./NavigationBar";
import Container from 'react-bootstrap/Container';
import AboutAsco from "./AboutAsco";
import Contact from "./ContactMe";
import Resume from "./Resume";
import Portfolio from "./Products";
import React, { useState } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    
    if (currentPage === 'aboutasco') {
      return <AboutAsco />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (<>
    <header>

      <NavigationBar page={currentPage} handlePageChange={handlePageChange} />
    </header>

    <Container>

      {renderPage()}
    </Container>

  </>)
}


export default Header;