import React from 'react';
import Config from '../Config/Config.js';

const Device = (props) => {
    const style = {
        backgroundColor: 'bisque',
        color: 'green',
        padding: '20px',
        margin: '25px',
        border: '2px solid red',
        borderRadius: '15px'
    }
    return (
        <div style={style}>
            <h2>My Device: {props.name}</h2>
            <h3>Current Steps: {props.steps}</h3>
            <Config price={props.price}></Config>
        </div>
    );
};

export default Device;