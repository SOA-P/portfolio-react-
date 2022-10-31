import React from 'react';
import NavBarre from '../components/NavBarre'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PriceCard from '../components/PriceCard';
import Work from '../components/Work';


const Project = () => {
    return (
        <div>
            <NavBarre />
            <HeroImg2  text="Un clin d'oeil sur mes récents projets." />
            <Work/>
            <PriceCard/>
            <Footer />
        </div>
    );
};

export default Project;