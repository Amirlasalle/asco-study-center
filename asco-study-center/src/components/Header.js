import NavigationBar from "./NavigationBar";
import Container from 'react-bootstrap/Container';
import AboutAsco from "./AboutAsco";
import React, { useState } from "react";
import Products from "./Products";
import StudyCenter from "./StudyCenter";
import Quizzes from "./QuizCenter";
import QuizCenterOne from "./QuizOne";
import QuizCenterTwo from "./QuizTwo";
import QuizCenterThree from "./QuizThree";
import QuizCenterFour from "./QuizFour";
import QuizCenterFive from "./QuizFive";
import ExamOne from "./ExamOne";
import ExamTwo from "./ExamTwo";
import ExamThree from "./ExamThree";



const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    
    if (currentPage === 'aboutasco') {
      return <AboutAsco />;
    }
    if (currentPage === 'quizcenterone') {
      return <QuizCenterOne />;
    }
    if (currentPage === 'quizzes') {
      return <Quizzes />;
    }
    if (currentPage === 'quizcentertwo') {
      return <QuizCenterTwo />;
    }
    if (currentPage === 'quizcenterthree') {
      return <QuizCenterThree />;
    }
    if (currentPage === 'quizcenterfour') {
      return <QuizCenterFour />;
    }
    if (currentPage === 'quizcenterfive') {
      return <QuizCenterFive />;
    }
    if (currentPage === 'examone') {
      return <ExamOne />;
    }
    if (currentPage === 'examtwo') {
      return <ExamTwo />;
    }
    if (currentPage === 'examthree') {
      return <ExamThree />;
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