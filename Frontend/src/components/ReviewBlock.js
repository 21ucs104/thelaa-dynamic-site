// src/components/ReviewBlock.js
import React from 'react';

const ReviewBlock = ({ review }) => {
    return (
        <div className="review-block">
            <h4>{review.author}</h4>
            <p>{review.comment}</p>
            <p>Rating: {review.rating} ⭐</p>
        </div>
    );
};

export default ReviewBlock;
