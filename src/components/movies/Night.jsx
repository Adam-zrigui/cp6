import React from 'react';
import ReactStars from 'react-stars';
import { night } from '../../data';

const Night = () => {
    const {title ,  description , rate , directors , logo } = night
    return (
        <div>
    <img src={logo} alt="" />
   <h2>{title}</h2>
   <ReactStars value={rate} />
   <p>{description}</p>
   <h3>made by {directors}</h3>
           </div>
    );
}

export default Night;
