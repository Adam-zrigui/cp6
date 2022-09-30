import React from 'react';
import List from './List';
import { useState } from 'react';
import {Movie} from '../../data'


const Home = () => {
    
const [movie , movieSetter ] = useState(Movie)
 
    return (
        <div>
            
            <List movies={movie} />

        </div>
    );
}

export default Home;
