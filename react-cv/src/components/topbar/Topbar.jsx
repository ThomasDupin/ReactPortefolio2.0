import React from 'react'
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar '+ (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'> Thomas Dupin</a>  
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+33 6 63 81 63 41</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>Thomas.dupin@viacesi.fr</span>
          </div>
          <div className="itemContainer">
          <a href='https://www.linkedin.com/in/thomas-dupin-b2118019b/'> <LinkedIn className='icon'/> </a>  
          </div>
          <div className="itemContainer">
          <a href='https://github.com/ThomasDupin'> <GitHub className='icon'/> </a>  
          </div>
        </div>  
        <div className='right'>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>  
      </div>
        
    </div>
  )
}
