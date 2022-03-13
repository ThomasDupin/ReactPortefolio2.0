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
                    <h3 onClick={() => setButtonPopup(true)}>{d.title}</h3>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <h3>My popup+{d.title} </h3>  
                      <p > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo doloremque ipsam sit dignissimos ullam necessitatibus inventore, unde deleniti suscipit autem repudiandae nesciunt, earum eos fugit iste voluptas molestias magni.</p>
                    </Popup>
                   
                    </div>
                  
                ))}
            
              </div>


        </div>
    );
};

export default Portfolio;