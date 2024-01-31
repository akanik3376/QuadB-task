/* eslint-disable react/prop-types */
import React from 'react';
import "../home/card.css";

const Card = ({ movie }) => {
    const { image, name } = movie || "";

    return (
        <div className="card zoom-hover mt-3" style={{ width: '22rem' }}>
            <img src={image?.medium} className="card-img-top shorter-image" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
            </div>
        </div>
    );
};

export default Card;
