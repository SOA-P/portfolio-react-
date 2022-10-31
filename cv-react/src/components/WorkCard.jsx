import React from 'react';
import "./WorkCardStyles.css";
import pro1 from "../assets/project1.png";
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={pro1} alt="image" />
                    <h2 className='project-title'>Project Title</h2>
                    <div className='pro-details'>
                        <p>this is a simple project</p>
                        <div className='pro-btns'>
                            <NavLink to="url.com" className="btn">View</NavLink>
                            <NavLink to="url.com" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;