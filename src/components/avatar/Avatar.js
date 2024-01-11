import React from 'react';
import "./avatar.css";

const Avatar = ({ codename, skill, speciality, price, image }) => {
    return (
        <div style={{ width: 'fit-content' }}>
            <div className='avatar-container'>
                <img draggable="false" src={image} className={'avatar-image' + (codename === "SN-02" ? " sniper" : "")} alt='arasaka agent avatar' />
            </div>
            <div className='avatar-text'>
                <div className='grid' style={{ gridTemplateColumns: "1fr 2fr", padding: "10px 0 10px 0" }}>
                    <span className={'avatar-code'}>CODENAME</span><p className={codename === "ATK-GLAD" ? "title" : ""}>{codename}</p>
                    <span className='avatar-code'>SKILL</span><p>{skill}</p>
                    <span className='avatar-code'>SPE</span><p>{speciality}</p>
                    <span className='avatar-code'>PRICE</span><p>{price} €$/day</p>
                </div>
            </div>
        </div>
    );
}

export default Avatar;
