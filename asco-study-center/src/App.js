import React from 'react';
import './App.css';
import PageContainer from './pages/PageContainer';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

function App() {
  return (
    <div id='root' className="App">
      <Header />
      <div>
        <PageContainer className="main-content"/>
      </div>
      <Footer />
    </div>

  );
}

export default App;