import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import NoMatch from '../../pages/NoMatch';

const NewsItem = ({ id, thumbnail, title, summary, fullDescription, date, citation }) => {
    const params = useParams();
    const isDetailPage = (params.id !== undefined);
    const { data } = useDataContext();

    let articleTitle = title;
    let articleDate = date;
    let articleCitation = citation;
    let articleDescription = fullDescription;
    let articleThumbnail = thumbnail;

    if (!id) {
        id = parseInt(params.id);
        var articleData = data["backgroundNews"].find(x => x.id === id);

        if (articleData === undefined) return (<NoMatch />);

        ({ title: articleTitle, date: articleDate, fullDescription: articleDescription, thumbnail: articleThumbnail, citation: articleCitation } = articleData);
    }

    return (
        <div className='news-item'>
            {isDetailPage ? (
                <div>
                    {/* To-do: Ajouter flèche retour arrière qui s'affiche dynamiquement */}
                    <h2 className='espace top bot-1'>News Article</h2>
                    <h1 className='very-very-large'>{articleTitle}</h1>
                    <p className='espace top-1 bot'>{articleDate}</p>
                    <figure className='news-full-image'>
                        <img src={articleThumbnail} alt='News thumbnail'/>
                    </figure>
                    <div className='news-description'>
                        <span className='news-citation'>{articleCitation}</span>
                        <div className='news-description-content'>
                        {articleDescription.map((item, index) => (
                            <React.Fragment key={index}>
                                <h1 className='espace top bot-1'>{item.title}</h1>
                                <p>{item.desc}</p>
                            </React.Fragment>
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
