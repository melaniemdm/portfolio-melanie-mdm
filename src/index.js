import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./layout/Header";
import Presentation from '../src/pages/Presentation';
import Error from './pages/Error-404';
import Home from './pages/Home';
import Projets from './pages/Projets'
import Separator from '../src/layout/separateur'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Header />
    <Separator/>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/presentation" element={<Presentation />} />
      <Route exact path="/projets" element={<Projets />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
</React.StrictMode>,

document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
