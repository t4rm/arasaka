import React, { createContext, useContext, useState, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { arasakaOfficesLocation, backgroundNews, flashNews, pressReleases } from "./data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    gsap.registerPlugin(ScrollTrigger);
    
    var tl = new gsap.timeline({paused: true});
    var tlLoca = new gsap.timeline({paused: true});
    var tlNews = new gsap.timeline({paused: true});
    var tlScrollSecurity = gsap.timeline({
        scrollTrigger: {
            trigger: "#security-h3",
            once: true
        },
    });

    const [data] = useState({tl: tl, tlLoca: tlLoca, tlNews: tlNews, tlSecu: tlScrollSecurity, locations: arasakaOfficesLocation, flashNews: flashNews, backgroundNews: backgroundNews, pressReleases: pressReleases});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);


    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
export default DataContext;