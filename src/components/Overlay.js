import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
const RadiumLink = Radium(Link);

export const Overlay = (props) => {

    const overlayStyle = {
        background: props.data.style.backgroundColor
    }

    const btnStyle = {
        background: props.data.style.backgroundColor,
        color: props.data.style.color,
        border: `2px solid ${props.data.style.color}`,

        ':hover': {
            background: props.data.style.color,
            color: props.data.style.backgroundColor
        },
    };
    
    return (
        <div className="overlay" style={overlayStyle} >

            <h3>{props.data.title}</h3>

            <div className="text">

                <a className="card__links__button" style={btnStyle} key={props.data.demoURL} href={props.data.demoURL}>Demo</a>
                <a className="card__links__button" style={btnStyle} key={props.data.githubURL} href={props.data.githubURL}>GitHub</a>
                <RadiumLink className="card__links__button" style={btnStyle} to={`/about/${props.data.infoURLName}`}>More Info</RadiumLink>

            </div>
        </div>
    );
}

export default Radium(Overlay);
