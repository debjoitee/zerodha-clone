import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';


// Below imports are for the components that are not part of the home section but are used in the HomePage component.
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar'; 


function HomePage() {
    return (
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
                
        </>
    );
} 

export default HomePage;