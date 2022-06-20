import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ imagePath, description }) => (
    <LazyLoadImage
        src={imagePath}
        alt={description}
        effect='blur'
        placeholderSrc='./images/placeholder.png'
    />
);

export default MyImage;