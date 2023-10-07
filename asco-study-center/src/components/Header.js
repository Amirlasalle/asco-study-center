import NavigationBar from "./NavigationBar";
import Container from 'react-bootstrap/Container';
import AboutAsco from "./AboutAsco";
import Contact from "./ContactMe";
import React, { useState } from "react";
import Products from "./Products";
import StudyCenter from "./StudyCenter";

const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    
    if (currentPage === 'aboutasco') {
      return <AboutAsco />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'products') {
      return <Products />;
    }
    if (currentPage === 'studycenter') {
      return <StudyCenter />;
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