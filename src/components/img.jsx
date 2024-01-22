import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = (props) => {
    return (
        <>
            <LazyLoadImage src={props.src}
                alt={props.alt} width={props.width} height={props.height} className={props.className}   />
        </>
    );
}

export default Img;