import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const { title, img, taskId } = activity;
    return (
        <div className='activity'>
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <h1>{taskId}</h1>
        </div>
    );
};

export default Activity;