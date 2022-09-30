import React from 'react';
import ReactStars from 'react-stars';
import { walking } from '../../data';

const Walk = () => {
    const {title ,  description , rate , directors , logo } = walking
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

export default Walk;
