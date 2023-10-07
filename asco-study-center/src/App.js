import React from 'react';
import './App.css';
import PageContainer from './pages/PageContainer';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div id='root' className="App">
      <Header />
      <div>
        <Switch>
        <PageContainer className="main-content"/>
        </Switch>
      </div>
      <Footer />
    </div>

  );
}

export default App;