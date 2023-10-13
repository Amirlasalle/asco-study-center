import NavigationBar from "./NavigationBar";
import Container from 'react-bootstrap/Container';
import AboutAsco from "./AboutAsco";
import React, { useState } from "react";
import Products from "./Products";
import StudyCenter from "./StudyCenter";
import QuizCenterOne from "./QuizCenterOne";
import QuizCenterTwo from "./QuizCenterTwo";
import QuizCenterThree from "./QuizCenterThree";


const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    
    if (currentPage === 'aboutasco') {
      return <AboutAsco />;
    }
    if (currentPage === 'quizcenterone') {
      return <QuizCenterOne />;
    }
    if (currentPage === 'quizcentertwo') {
      return <QuizCenterTwo />;
    }
    if (currentPage === 'quizcenterthree') {
      return <QuizCenterThree />;
    }
    if (currentPage === 'products') {
      return <Products />;
    }
    if (currentPage === 'studycenter') {
      return <StudyCenter />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
  <div className="m-0">
    <header>
      <NavigationBar page={currentPage} handlePageChange={handlePageChange} />
    </header>

    <Container>

      {renderPage()}
    </Container>

  </div>)
}


export default Header;