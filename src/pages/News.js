import React from 'react';
import "../css/news.css"
import ImportantNews from "../components/secondary/ImportantNews";
import NewsItem from "../components/secondary/NewsItem";
import PressItem from "../components/secondary/PressItem";
import { Link } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const News = () => {
    const { data } = useDataContext();

    useGSAP(() => {
        data["tlNews"].to("#news-header", { text: { value: "News" }, duration: 1, ease: "none" }, ">")
        data["tlNews"].fromTo("#news-important", { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: "none", duration: 1 }, ">")
        data["tlNews"].fromTo(".news-group", { opacity: 0 }, { opacity: 1, duration: 1.5 }, ">")

        var items = gsap.utils.toArray('.news-row');

        items.forEach((section, index) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                }
            });

            tl.fromTo(section, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, ease: 'none' }, ">")
        })
    });

    return (
        <main className='section-container'>
            <div>
                <h1 id='news-header' className='very-very-large'>&#8203;</h1>
                <ImportantNews key="flash" {...data["flashNews"]} />
            </div>
            <div className='news-group'>
                <div className='news-row'>
                    <hr />

                    <div className='flex space-between'>
                        <h2 className='large espace top bot'>Editorial</h2>
                        <Link to="/news" className='large espace top bot'>See all</Link>
                    </div>
                    <div className='news-editorial-section espace bot'>
                        {data["backgroundNews"].map((news, index) => (
                            <NewsItem key={index} {...news} />
                        ))}
                    </div>
                    <hr />
                </div>

                <div className='news-row'>
                    <div className='flex space-between'>
                        <h2 className='large espace top bot'>Press Release</h2>
                        <Link to="/press" className='large espace top bot'>See all</Link>
                    </div>
                    <div className='news-editorial-section espace bot-3'>
                        {data["pressReleases"].map((news, index) => (
                            <PressItem key={index} {...news} />
                        ))}
                    </div>
                    <hr />
                </div>

                <div className='news-row'>
                    <div className='flex space-between espace top mediacenter-container'>
                        <h2 className='large espace top bot'>Media Ressources</h2>
                        <div className='flex col'>
                            <p>Looking for Arasaka media assets? The media center offers brand assets and other media approved for public use—all high quality and ready to download.</p>
                            <Link className='title very-very-large' to="/mediacenter">Media Center</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default News;

// Grosse news = realtime news
// ligne d'articles = sujets approfondis
// multimédia intéractif (permettre de lire une news en appuyant sur un bouton ?)
// section arasaka dans le monde à la fin