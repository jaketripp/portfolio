import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const cardStyle = {
        color: props.data.color,
    };
    const overlayStyle = {
        backgroundColor: props.data.backgroundColor
    };
    return (
        <div className="card" style={cardStyle}>
            <img src={props.data.logo} alt={`${props.data.title} logo`} className="image" />
                <div className="overlay" style={overlayStyle}>
                    <h3>{props.data.title}</h3>
                    <div className="text">
                        <Link className="card__links__button" to={props.data.demoURL}>Demo</Link>
                        <Link className="card__links__button" to={props.data.githubURL}>GitHub</Link>
                        <Link className="card__links__button" to={`/apps/info/${props.data.infoURLName}`}>More Info</Link>
                    </div>
                </div>
        </div>
                
    );
}

export default Card;

// var Link = React.createClass({
//     getInitialState: function () {
//         return { hover: false }
//     },
//     toggleHover: function () {
//         this.setState({ hover: !this.state.hover })
//     },
//     render: function () {
//         var linkStyle;
//         if (this.state.hover) {
//             linkStyle = { backgroundColor: 'red' }
//         } else {
//             linkStyle = { backgroundColor: 'blue' }
//         }
//         return (
//             <div>
//                 <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//             </div>
//         )
//     }
