import React from 'react';
import ReactStars from 'react-stars';
import { war } from '../../data';

const Infinite = () => {
    const {title ,  description , rate , directors , logo } = war
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

export default Infinite;
