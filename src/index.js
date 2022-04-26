import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./layout/Header";
import PresentMe from '../src/components/Presentation';
import Error from './pages/Error-404';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets'
//import Separateur from '../src/layout/separateur'
import Footer from '../src/layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header />
    
    <Routes>
      <Route exact path="/accueil" element={<Accueil />} />
      <Route exact path="/" element={<Accueil />} />
      <Route exact path="/PresentMe" element={<PresentMe />} />
      <Route exact path="/projets" element={<Projets />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
  </Router>
</React.StrictMode>,


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
