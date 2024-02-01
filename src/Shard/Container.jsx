/* eslint-disable react/prop-types */
// import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="container-xl mx-auto">
            {children}
        </div>
    );
};

export default Container;
