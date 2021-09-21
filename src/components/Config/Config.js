import React from 'react';

const Config = (props) => {
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
            <h4>Price: {props.price}</h4>
        </div>
    );
};

export default Config;