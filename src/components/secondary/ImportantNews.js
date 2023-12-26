import React from 'react';
import { Link } from 'react-router-dom';

// Bool : True, if we want the full description. Otherwise : Summary.
const ImportantNews = ({ id, thumbnail, title, summary, fullDescription }) => {

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
        <div id='news-important' className='news-important-item summary'>
            <figure>
                <img src={thumbnail} alt={`Arasaka - News #${id}`}/>
            </figure>
            <div className='flex center col'>
                <h3 className='title'>Featured News</h3>
                <h2>{title}</h2>
                <p>{summary}</p>
                <Link to={`/news/article-${id}`}/>
            </div>
        </div>
    );
}

export default ImportantNews;
