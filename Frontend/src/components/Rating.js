// src/components/Rating.js
import React, { useState } from 'react';

const Rating = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);

    const handleRatingSubmit = () => {
        onSubmit(rating);
        setRating(0); // Reset rating after submit
    };

    return (
        <div className="rating">
            <h3>Rate Us:</h3>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)} style={{ cursor: 'pointer' }}>
                    {star <= rating ? '★' : '☆'}
                </span>
            ))}
            <button onClick={handleRatingSubmit}>Submit Rating</button>
        </div>
    );
};

export default Rating;
