import React from 'react';

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
                <li>Featured</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>Premier item</h3>
                </div>

                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>Second item</h3>
                </div>

                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>Trois item</h3>
                </div>

                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>quatre item</h3>
                </div>

                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>cinq item</h3>
                </div>

                <div className="item">
                    <img src='assets/JV.png' alt=""></img>
                    <h3>six item</h3>
                </div>

                
            
            </div>
        </div>
    );
};

export default Portfolio;