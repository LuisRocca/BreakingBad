import React from 'react';
import './card.css'

function Card({name, image, nickName}) {
    return(
        <div className='carta'>
            <h3>{name}</h3>
            <h5>{nickName}</h5>
            <img src={image} alt="no hay" width='120px' height='200px'></img>
        </div>
    );
};

export default Card;