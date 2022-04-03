import React from 'react';
import PortfolioList from './PortfolioList';
import Popup from '../popup/Popup';

import { useEffect, useState } from "react";
import {
    featuredPortfolio,
    SchoolPortfolio,
    InternshipPortfolio,
    PersonnalPortfolio,
    OtherPortfolio,
  } from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "School",
            title: "School project",
          },
          {
            id: "Internship",
            title: "Internship project",
          },
          {
            id: "Personnal",
            title: "Personnal project",
          },
          {
            id: "Other",
            title: "Other",
          },
        ];
    useEffect(() => {
        switch (selected) {
            case "featured":
              setData(featuredPortfolio);
              break;
            case "School":
              setData(SchoolPortfolio);
              break;
            case "Internship":
              setData(InternshipPortfolio);
              break;
            case "Personnal":
              setData(PersonnalPortfolio);
              break;
            case "Other":
              setData(OtherPortfolio);
              break;
            default:
              setData(featuredPortfolio);
          }
    },[selected])

    const [buttonPopup, setButtonPopup] = useState(false);
    
    let idItem;

   
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=> (

                    <PortfolioList title={item.title} 
                    active={selected ===item.id} 
                    setSelected= {setSelected}
                    id={item.id}
                    />    
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    
                    <div className="item">
                      <img src={d.img} alt="" className='imgPort'></img>
                  
                        <h3>{d.title}</h3>
                        <p className='text'>{d.text}</p>
                        <p className='tec'>Technologies used : {d.tec}</p>
                        <a className='git' href={d.git}> {d.git}</a> 
                        <p>{d.drive}</p>
                     
                    </div>
                  
                ))}

              </div>
         
             
                
        </div>
    );
};

export default Portfolio;


