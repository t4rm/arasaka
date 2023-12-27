import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import NoMatch from '../../pages/NoMatch';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NewsItem = ({ id, thumbnail, title, summary, fullDescription, date, citation, citationAuthor }) => {
    const params = useParams();
    const isDetailPage = (params.id !== undefined);
    const { data } = useDataContext();

    let articleTitle = title;
    let articleDate = date;
    let articleCitation = citation;
    let articleCitationAuthor = citationAuthor;
    let articleDescription = fullDescription;
    let articleThumbnail = thumbnail;



    useGSAP(() => {
        var tlNews = new gsap.timeline({paused: true});

        tlNews.to("#news-item-header-2", { text: { value: "News Article" }, duration: .4, ease: "none" }, ">")
        tlNews.to("#news-item-header-1", { text: { value: articleTitle }, duration: 1, ease: "none" })
        tlNews.to("#news-item-date", { text: { value: articleDate }, duration: .4, ease: "none" }, ">")
        tlNews.fromTo(".news-full-image > img", { opacity: 0, scale: 1 }, { opacity:1, scale: 1.05, duration: .5, ease: "bounce"})
        tlNews.to(".news-citation", { text: { value: `“${articleCitation}”` }, duration: 1.5, ease: "none" }, ">")
        tlNews.to(".news-description > i", { text: { value: `- ${articleCitationAuthor}` }, duration: .8, ease: "none" }, ">")


        tlNews.fromTo(".news-description-content", { opacity: 0 }, { opacity:1, duration: 1}, ">")

       
        var articles = gsap.utils.toArray('.news-article-content');

        articles.forEach((article, index) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: article,
                }
            });

            tl.fromTo(article, { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 0.5, ease: 'none' }, ">")
        })

        tlNews.play();
    });

    if (!id) {
        id = parseInt(params.id);
        var articleData = data["backgroundNews"].find(x => x.id === id);

        if (articleData === undefined) return (<NoMatch />);

        ({ title: articleTitle, date: articleDate, fullDescription: articleDescription, thumbnail: articleThumbnail, citation: articleCitation, citationAuthor: articleCitationAuthor } = articleData);
    }

    return (
        <div className='news-item'>
            {isDetailPage ? (
                <div>
                    {/* To-do: Ajouter flèche retour arrière qui s'affiche dynamiquement */}
                    <h2 className='espace top bot-1' id='news-item-header-2'> </h2>
                    <h1 className='very-very-large' id='news-item-header-1'> </h1>
                    <p className='espace top-1 bot' id='news-item-date'> </p>
                    <figure className='news-full-image'>
                        <img src={articleThumbnail} alt='News thumbnail' />
                    </figure>
                    <div className='news-description'>
                        <span className='news-citation'></span>
                        <br /><i></i>
                        <div className='news-description-content'>
                            {articleDescription.map((item, index) => (
                                <div className='news-article-content' key={index}>
                                    <h1 className='espace top bot-1'>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <Link to={`/news/article/${id}`}>
                    <figure className='news-small-banner-container'>
                        <img src={thumbnail} alt={`Arasaka - News #${id}`} className='news-small-banner' />
                    </figure>
                    <h2 className='espace bot-1 top-1'>{articleTitle}</h2>
                    <p>{articleDate}</p>
                </Link>
            )}
        </div>
    );
};


export default NewsItem;
