import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import ServiceSection from "./components/ServiceSection";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import LabSection from "./components/LabSection";
import Choose from "./components/Choose";
import MsgDoctor from "./components/MsgDoctor";
export default function Main(){
    return(
        <>
            <Header />
            <Navigation/>
             <Banner/>
             <Services/>
             <ServiceSection/>  
             <AboutSection/> 
             <LabSection/>
             <Choose/>
             <MsgDoctor/>
             <Footer/>
        </>
    )
}