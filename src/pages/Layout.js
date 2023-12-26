import React, { useEffect } from 'react';
import Header from "../components/main/Header";
import Background from "../components/main/Background";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
// import Loading from './Loading';
import About from './About';
import Location from './Location';
import News from './News';
import NoMatch from './NoMatch';
import "../css/layout.css"
import { useDataContext } from '../context/DataContext';

const Layout = () => {
    const { data } = useDataContext();
    const location = useLocation();

    useEffect(() => {

        // Home :
        // if (location.pathname === '/') {
            data["tl"].play();
        // }
        
        // Locations :
        if (location.pathname === '/location') {
            data["tlLoca"].resume();
        } else data["tlLoca"].pause(); // Prevent our timeline from going further while the user isn't on the right page.
        
        if (location.pathname === '/newsroom') {
            data["tlNews"].resume();
        } else data["tlNews"].pause(); // Prevent our timeline from going further while the user isn't on the right page.
    
    
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
                <Route path="/newsroom" element={<News />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
            {/* <Footer/> */}
        </div>
    );
}

export default Layout;