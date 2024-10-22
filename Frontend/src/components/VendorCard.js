// src/components/VendorCard.js
import React from 'react';

const VendorCard = ({ vendor }) => {
    return (
        <div className="vendor-card">
            <img src={vendor.imageUrl} alt={vendor.name} className="vendor-image" />
            <h3>{vendor.name}</h3>
            <p>{vendor.description}</p>
            <p>Rating: {vendor.rating} ⭐</p>
            <button onClick={() => window.alert(`Contacting ${vendor.name}`)}>Contact</button>
        </div>
    );
};

export default VendorCard;
