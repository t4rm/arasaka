import React from 'react';
import { Link } from 'react-router-dom';

// Bool : True, if we want the full description. Otherwise : Summary.
const NewsItem = ({ id, thumbnail, title, summary, fullDescription, date }) => {

    // Permettre exportation PDF
    // if(bool) return (
    //     <div className='news-important-item'>
    //         <h2>{title}</h2>
    //         <hr/>
    //         <p>{fullDescription}</p>
    //     </div>
    // )
    // else 
    return (
        <div className='news-item summary'>
            <Link to={`/news/article-${id}`}>
                <figure className='news-small-banner-container'>
                    <img src={thumbnail} alt={`Arasaka - News #${id}`} className='news-small-banner' />
                </figure>
                <h2 className='espace bot-1 top-1'>{title}</h2>
                <p>{date}</p>
            </Link >
        </div >
    );
}

export default NewsItem;
