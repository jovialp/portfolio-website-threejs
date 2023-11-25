import React from 'react';


import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "../../components";
const Home = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
            
      <h6 className="text-center">Copyright ©{new Date().getFullYear()} by <a href="https://imagine.jovialp.com/">Jovial</a>. All rights reserved.</h6>
        </div>
    );
}


export default Home
