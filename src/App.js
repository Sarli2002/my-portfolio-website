import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import Header from "./components/Header/Header";

import Education from './Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'
import Aboutme from './components/Aboutme/Aboutme';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <div className="App">
  <Navbar/>
 
  <Header/>
  <Aboutme/>
  
  <Education/>
 
 <Skills/>
<Contact/>
<Footer/>
  </div>
  );
}

export default App;
