import React, { useEffect, useRef } from 'react'
import {init} from 'ityped'

export default function Intro() {

  const textRef = useRef();
  useEffect(() =>{
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings:["Looking for an End-Of-Study professional contract","Passionate about video games developement", "Developer" ]

    });
  }, []);



  return (
    <div className='intro' id="intro">
      <div className="left">
          <div className="imgContainer">
            <img src='assets/test.png' alt=''/>
          </div>   
      </div>
      <div className='right'>
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Thomas Dupin</h1>
              <h3>4th year IT Engineering student <span ref={textRef}></span></h3>
               <a class="link" href="assets/ThomasDupin.pdf"> Download my resume</a> 

          </div>
          <a href='#roadmap' className='down'>
              <img src='assets/down.png' alt=""/>  
          </a>
      </div> 
    </div>
  )
}
