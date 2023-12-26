import React, { useEffect } from 'react';
import Header from "../components/main/Header";
import Background from "../components/main/Background";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
// import Loading from './Loading';
import About from './About';
import Location from './Location';
import NoMatch from './NoMatch';
import "../css/layout.css"
import { useDataContext } from '../context/DataContext';

const Layout = () => {
    const { data } = useDataContext();
    const location = useLocation();

    useEffect(() => {
        // Home :
        if (location.pathname === '/') {
            data["tl"].play();
            data["tlLoca"].pause();
        }
        // Locations :
        if (location.pathname === '/location') {
            data["tlLoca"].resume();
        }
    }, [location, data ]);
    
    // if (loading)
    //     return (
    //         <Loading />
    //     )
    // else
    return (
        <div className='layout'>
            <Header />
            <Background />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default Layout;