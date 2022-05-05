import React from 'react';

const Bicycle = ({ bicycle }) => {
    const { name, img, description, price } = bicycle
    return (
        <div>
            <h1> {name}</h1>
        </div>
    );
};

export default Bicycle;