import React from 'react';
import "./frame.css";

const Frame = ({ text }) => {
    return (
        <div className='frame-container'>
            {/* 4 coins du bloc : */}
            <img src='/assets/images/arasaka-corner.png' alt='corner' className='frame-corner' style={{ inset: 0 }} />
            <img src='/assets/images/arasaka-corner.png' alt='corner' className='frame-corner' style={{ transform: "rotate(90deg)", right: 0 }} />
            <img src='/assets/images/arasaka-corner.png' alt='corner' className='frame-corner' style={{ transform: "rotate(180deg)", right: 0, bottom: 0 }} />
            <img src='/assets/images/arasaka-corner.png' alt='corner' className='frame-corner' style={{ transform: "rotate(270deg)", bottom: 0, left: 0 }} />
            <div className='frame-text title'>
                {text}
            </div>
        </div>
    );
}

export default Frame;
