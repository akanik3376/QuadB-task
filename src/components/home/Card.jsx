/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from "react-router-dom";
import "../home/card.css";

const Card = ({ movie }) => {
    const { image, name, id } = movie || "";

    return (
        <Link to={`/details/${id}`}>
            <div className="card zoom-hover mt-3 p-3" style={{ width: '22rem' }}>
                <img src={image?.medium} className="card-img-top shorter-image" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>

    );
};


export default Card;
