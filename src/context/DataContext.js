import React, { createContext, useContext, useState, useEffect } from 'react';
import gsap from "gsap";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    var tl = new gsap.timeline({
        paused: true
    });

    const [data] = useState({tl: tl});
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