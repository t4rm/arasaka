import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import NoMatch from '../../pages/NoMatch';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Permettre exportation PDF
const PressItem = ({ id, title, summary, fullDescription, date }) => {
    const params = useParams();
    const isDetailPage = (params.id !== undefined);
    const { data } = useDataContext();

    let articleTitle = title;
    let articleDate = date;
    let articleDescription = fullDescription;
    let aboutArasaka = "Arasaka Corporation, a name synonymous with cutting-edge innovation and global influence, stands at the forefront of technological advancement and security services. Founded in the late 20th century by the visionary Saburo Arasaka, this Japanese megacorporation has grown into one of the most powerful and respected entities in the world. With a diverse portfolio encompassing advanced weaponry, cybersecurity, and private military contracting, Arasaka has become a pillar of stability and progress in an ever-evolving geopolitical landscape.";
    let contactPress = "For further information: Media: Nara Kujo, Director, Media Relations, media@arasaka.co.jp; Investor: Ryo Satô, Vice President, Investor Relations, investor.relations@arasaka.co.jp";

    useGSAP(() => {
        var tlNews = new gsap.timeline({ paused: true });

        tlNews.fromTo(".news-full-image > img", { opacity: 0, scale: 1 }, { opacity:1, scale: 1.05, duration: 1, ease: "bounce"})
        tlNews.to("#press-item-header-2", { text: { value: articleTitle }, duration: .8, ease: "none" }, ">")
        tlNews.to("#press-hr", { width: "100%", duration: .8 }, "<")
        tlNews.to(".press-description", { text: { value: articleDescription }, duration: 3, ease: "none" })
        tlNews.to("#press-about-us", { text: { value: "ABOUT ARASAKA" }, duration: 1, ease: "none" })
        tlNews.to("#press-about-us-description", { text: { value: aboutArasaka }, duration: 3, ease: "none" })
        tlNews.to(".small", { text: { value: contactPress }, duration: 2, ease: "none" })

        tlNews.play();
    });

    if (!id) {
        id = parseInt(params.id);
        var articleData = data["pressReleases"].find(x => x.id === id);

        if (articleData === undefined) return (<NoMatch />);

        ({ title: articleTitle, date: articleDate, fullDescription: articleDescription } = articleData);
    }



    {/* To-do: Ajouter flèche retour arrière qui s'affiche dynamiquement */ }
    return (
        <div className='news-item'>
            {isDetailPage ? (
                <div className='news-press-item-container'>
                    <figure className='news-full-image no-over'>
                        <img src="/assets/images/news/arasaka-press.png" alt='Press cover' />
                    </figure>
                    <div className='press-content'>
                        <h2 className='espace top bot-1' id='press-item-header-2'></h2>
                        {/* PDF LOGO HERE */}
                        <hr id='press-hr' className='no-width' />
                        <p className='press-description espace top-1'></p>
                        <h2 id='press-about-us' className='espace top-1 bot-1'></h2>
                        <p id='press-about-us-description' className='espace bot-1'></p>
                        <footer>
                            <p className='small'></p>
                        </footer>
                    </div>
                </div>
            ) : (
                <div className='press-item summary'>
                    <Link to={`/news/press/${id}`}>
                        <h2 className='espace bot-1 top-1'>{title}</h2>
                        <p>{summary}</p>
                        <footer>{date}</footer>
                    </Link >
                </div >
            )}
        </div>
    );
}

export default PressItem;
