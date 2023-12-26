import React from 'react';

const LocationItem = ({ country, city, landmark, street, district, specialFeatures }) => {
    return (
        <div className='location-item'>
            <h2 className='large'>{country}</h2>
            <div>
                <h3>{city}</h3>
                <p>
                    <strong>{landmark}</strong><br />
                    {street}<br />
                    {district}<br />
                    {specialFeatures && <span>Features: <span className="special-features">{specialFeatures}</span></span>}
                </p>
            </div>
        </div>
    );
}

export default LocationItem;
