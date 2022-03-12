import React from 'react';
import PortfolioList from './PortfolioList';
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
                    <img src={d.img} alt=""></img>
                    <h3>{d.title}</h3>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Portfolio;