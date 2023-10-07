import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PageContainer from './pages/PageContainer';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import AboutAsco from "../src/components/AboutAsco";
import Contact from "../src/components/ContactMe";
import Products from "../src/components/Products";
import StudyCenter from "../src/components/StudyCenter";

function App() {
  return (
    <Router>

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
          <Route path="/contact" element={<Contact />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;