// src/components/MovieCard.js

import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const MovieCard = ({ movie }) => {
    return (

        <Card
        hoverable
        style={{
        width: 240,
        }}
        cover={<img alt={movie.name} src={movie.picture} />}
        >
        <Meta title={movie.name} description={movie.rating} />
        </Card>
    );
};

export default MovieCard;
