import React from 'react';
import NavBarre from '../components/NavBarre'
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
const Contact = () => {
    return (
        <div>
            <NavBarre/>
            <HeroImg2 heading="UN PROJET EN TÊTE?" text="Laissez moi un message."/>
            <Footer/>
        </div>
    );
};

export default Contact;