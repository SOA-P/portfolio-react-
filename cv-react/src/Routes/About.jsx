import React from 'react';
import NavBarre from '../components/NavBarre'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About  = () => {
    return (
        <div>
            <NavBarre/>
            <HeroImg2 heading="ABOUT ME." text="Je suis un développeur magic.🧙🏽‍♂️"/>
            <AboutContent/>
            <Footer/>
        </div>
    );
};

export default About ;