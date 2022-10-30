import React from 'react';

import NavBarre from '../components/NavBarre'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PriceCard from '../components/PriceCard';

const Project = () => {
    return (
        <div>
            <NavBarre />
            <HeroImg2 heading="PROJECTS." text="Un clin d'oeil sur mes récents travaux personnels." />
            <PriceCard/>
            <Footer />
        </div>
    );
};

export default Project;