import React from 'react';

export default function Placeholder(props) {
    console.log(props);
    return (
        <img src={`/images/tiny/${props.src}`} alt={props.dataAlt} /> 
    );
}
