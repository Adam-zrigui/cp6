import React from 'react';
import ReactStars from 'react-stars';
import { name } from '../../data';

const Name = () => {
    const {title ,  description , rate , directors , logo } = name
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

export default Name;
