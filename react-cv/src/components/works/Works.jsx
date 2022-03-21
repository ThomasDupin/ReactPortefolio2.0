import React from 'react'
import { useState } from "react";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Aalborg Internship",
      icon: "./assets/icon.png",
      dl:"./assets/RecAalborg.pdf",
      attr: "link",
      desc:
        "	Internship inside a VR laboratory at Aalborg University, The project was a VR game 	used to help strokes patient gain back their mobility. I was in charge of the Eye 	tracking software. I did a lot of data analysis in R. The Software I using Unity. I was 	able to have a first look at the research metholody and I did some Project 	Management",
      img:
        "./assets/aalborg.jpg",
        git:
        "https://github.com/ThomasDupin?tab=repositories"
    },
    {
      id: "2",
      icon: "./assets/icon.png",
      title: "BME Internship",
      dl:"./assets/RecBME.pdf",
      attr: "link",
      desc:
        "	Trainee in BME, within the IT services department, in a team of 5 people. 	Development of a internal tools using the Agile methodology for the company, 	The 	software will allow the company to record the work time of the IT service 	provider. The software is in Php with the Symfony 4 framework, with 3rd party  	external tools like, Mantis, Jenkins, SVN .",
      img:
        "assets/dataImg/bme.jpg",
    },
    {
      id: "3",
      icon: "./assets/icon.png",
      title: "Gertrude Internship",
      attr: "hidden",
      desc:
        "	Trainee at Gertrude SAEM inside the development team. Development of a supervision tools inside a new web service for the new 	Gertrude customers. I used Javascript with the framework Vue js, also I used 	 	virtual computer with Docker and GitHub.",
      img:
        "assets/dataImg/gertrude.jpg",
    },
  ];


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
        <div className="slider" 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        
        >
          {data.map(d=>(<div className="container">
            <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={d.icon} alt=""/>
                    </div>  
                    <h2>{d.title}</h2>
                    <p>
                     {d.desc}
                    </p>
                    <h5>Github link: </h5>
                    <span className="git">{d.git}</span>
                    <span className='link'> <a href={d.dl} target="blank" className={d.attr} > Download the recommandation letters</a></span>
                  </div>
                </div>
                <div className="right">  
                <img
                  src={d.img}
                  alt=""
                />  
                </div>
            </div>
           
          </div> ))}
        </div>
        <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
        
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  )
}