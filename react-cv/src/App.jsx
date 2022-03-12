import React from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import  { useState} from "react"
import Roadmap from './components/roadMap/Roadmap';



function App(){
  const [menuOpen, setMenuOpen] = useState(false)
 

  return (
      <div className='app'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Roadmap/>
          <Portfolio/>
          <Works/>
          <Contact/>
          
          </div>
  
      </div>
  );
};

export default App;