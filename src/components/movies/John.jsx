import React from 'react';
import ReactStars from 'react-stars';
import { john } from '../../data';

const John = () => {
    const {title ,  description , rate , directors , logo } = john
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

export default John;
