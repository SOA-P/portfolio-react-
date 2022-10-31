import React from 'react';
import "./WorkCardStyles.css";
import WorkCardData from './WorkCardData';
import WorkCard from './WorkCard';

const Work = () => {
    return (
        <div className='work-container'>
            <div className='project-container'>
               {WorkCardData.map((val,ind)=>{
                return (
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    />
                )
               })}
            </div>
        </div>
    );
};

export default Work;