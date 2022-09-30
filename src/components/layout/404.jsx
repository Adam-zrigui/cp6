import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/404.css'
const Status = () => {
    let location = useLocation()
    return (
        <div className='div'>
            <per className="error">error 404 ({location.pathname} not found)</per>
        </div>
    );
}

export default Status;
