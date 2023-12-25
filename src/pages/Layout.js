import React from 'react';
import Header from "../components/main/Header";
import Background from "../components/main/Background";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Loading from './Loading';
import About from './About';
import NoMatch from './NoMatch';
import "../css/layout.css"
// import { useDataContext } from '../context/DataContext';


const Layout = () => {

    // const { loading } = useDataContext();

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
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        );
}

export default Layout;