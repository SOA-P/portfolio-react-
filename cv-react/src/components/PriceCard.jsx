import React from 'react';
import "./PriceCardStyle.css";
import { Link } from "react-router-dom";


const PriceCard = () => {
    return (
        <div className='price'>
            <div className='card-container'>
                <div className='card'>
                    <h3> - Basic - </h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Deign -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE NOW
                    </Link>
                </div>
                <div className='card'>
                    <h3> - Prenium - </h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 200</p>
                    <p>- 2 days -</p>
                    <p>- 5 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Deign -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE NOW
                    </Link>
                </div>
                <div className='card'>
                    <h3> - Business - </h3>
                    <span className='bar'></span>
                    <p className='btc'>$ 400</p>
                    <p>- 5 days -</p>
                    <p>- 8 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Deign -</p>
                    <Link to="/contact" className='btn'>
                        PURCHASE NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;