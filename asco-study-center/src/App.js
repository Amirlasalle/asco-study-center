import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageContainer from './pages/PageContainer';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import NavigationBar from "../src/components/NavigationBar";
import AboutAsco from "../src/components/AboutAsco";
import Contact from "./components/QuizCenterOne";
import Products from "../src/components/Products";
import StudyCenter from "../src/components/StudyCenter";
import QuizCenterOne from "../src/components/QuizCenterOne";
import QuizCenterTwo from "../src/components/QuizCenterTwo";
import QuizCenterThree from "../src/components/QuizCenterThree";



function App() {
  return (
    <Router>
      <NavigationBar />
      <div id='root' className="flex-column justify-flex-start min-100-vh">
        <Header />

        <Routes>
          <Route path="/asco-study-center" element={<PageContainer />}
          />
          <Route path="/aboutasco" element={<AboutAsco />}
          />
          <Route path="/products" element={<Products />}
          />
          <Route path="/studycenter" element={<StudyCenter />}
          />
          <Route path="/quizcenterone" element={<QuizCenterOne />}
          />
           <Route path="/quizcentertwo" element={<QuizCenterTwo />}
          />
           <Route path="/quizcenterthree" element={<QuizCenterThree />}
          />
          <Route path="/contact" element={<Contact />}
          />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;