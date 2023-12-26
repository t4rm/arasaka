import React from 'react';
import { Link } from 'react-router-dom';

// Bool : True, if we want the full description. Otherwise : Summary.
const PressItem = ({ id, thumbnail, title, summary, fullDescription, date }) => {

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
        <div className='press-item summary'>
            <Link to={`/news/article-${id}`}>
                <h2 className='espace bot-1 top-1'>{title}</h2>
                <p>{summary}</p>
                <footer>{date}</footer>
            </Link >
        </div >
    );
}

export default PressItem;
