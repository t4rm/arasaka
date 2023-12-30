import React, { useEffect } from 'react';
import Header from "../components/main/Header";
import Background from "../components/main/Background";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
// import Loading from './Loading';
import About from './About';
import Location from './Location';
import News from './News';
import Careers from './Careers';
import Jobsearch from './careers/Search';
import NewsItem from "../components/secondary/NewsItem";
import NoMatch from './NoMatch';
import "../css/layout.css"
import { useDataContext } from '../context/DataContext';
import PressItem from '../components/secondary/PressItem';

const Layout = () => {
    const { data } = useDataContext();
    const location = useLocation();

    useEffect(() => {

        // Home :
        if (location.pathname === '/') {
            data["tl"].play();
        } else data["tl"].play(7);

        // Locations :
        if (location.pathname === '/location') {
            data["tlLoca"].resume();
        } else data["tlLoca"].pause(); // Prevent our timeline from going further while the user isn't on the right page.

        if (location.pathname === '/newsroom') {
            data["tlNews"].resume();
        } else data["tlNews"].pause(); // Prevent our timeline from going further while the user isn't on the right page.


    }, [location, data]);

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
                <Route path="/news/article/:id" element={<NewsItem />} />
                <Route path="/news/press/:id" element={<PressItem />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/jobsearch" element={<Jobsearch />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
            {/* <Footer/> */}
        </div>
    );
}

export default Layout;