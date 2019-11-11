import React from 'react';
import './App.scss';

import Bg from './components/bg/bg';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Career from './components/career/career';
import Works from './components/works/works';
import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="App">
      <Bg />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Career />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
