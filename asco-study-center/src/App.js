import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageContainer from './pages/PageContainer';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NavigationBar from "../src/components/NavigationBar";
import AboutAsco from "../src/components/AboutAsco";
import Products from "../src/components/Products";
import StudyCenter from "../src/components/StudyCenter";
import FlashCards from "../src/components/FlashCards";
import QuizCenter from "./components/QuizCenter";
import QuizOne from "./components/QuizOne";
import QuizTwo from "./components/QuizTwo";
import QuizThree from "../src/components/QuizThree";
import QuizFour from "../src/components/QuizFour";
import QuizFive from "../src/components/QuizFive";
import ExamOne from "../src/components/ExamOne";
import ExamTwo from "../src/components/ExamTwo";
import ExamThree from "../src/components/ExamThree";



function App() {
  return (
    <HashRouter >
      <NavigationBar />
      <div id='root' className="flex-column justify-flex-start min-100-vh">
        <Header />

        <Routes>
          <Route path="/" element={<PageContainer />}
          />
          <Route path="/aboutasco" element={<AboutAsco />}
          />
          <Route path="/products" element={<Products />}
          />
          <Route path="/studycenter" element={<StudyCenter />}
          />
           <Route path="/flashcards" element={<FlashCards />}
          />
          <Route path="/quizcenter" element={<QuizCenter />}
          />
          <Route path="/quizone" element={<QuizOne />}
          />
          <Route path="/quiztwo" element={<QuizTwo />}
          />
          <Route path="/quizthree" element={<QuizThree />}
          />
         <Route path="/quizfour" element={<QuizFour />}
          />
            <Route path="/quizfive" element={<QuizFive />}
          />
          <Route path="/examone" element={<ExamOne />}
          />
          <Route path="/examtwo" element={<ExamTwo />}
          />
          <Route path="/examthree" element={<ExamThree />}
          />
        </Routes>
      </div>
      <Footer />

    </HashRouter>
  );
}

export default App;