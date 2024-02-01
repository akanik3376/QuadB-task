import React from 'react';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/McWkLGT/Dark-Movie-Trailer-Youtube-Thumbnail.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '50px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '3rem',
        fontWeight: '600',
        marginBottom: '20px',
    };

    return (
        <div style={bannerStyle}>
            <h1 style={headingStyle}>Book Your Movie Tickets Online</h1>
            <p>Experience the convenience of booking movie tickets from the comfort of your home. Choose from the latest releases, select your preferred seats, and enjoy a seamless movie-going experience.</p>
            <button className="btn btn-primary">Get Started</button>
        </div>
    );
};

export default Banner;
