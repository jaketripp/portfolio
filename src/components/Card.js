import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
const RadiumLink = Radium(Link);

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        const cardStyle = {
            color: this.state.data.color
        }
        const overlayStyle = {
            background: this.state.data.backgroundColor
        }

        const btnStyle = {
            background: this.state.data.backgroundColor,
            color: this.state.data.color,
            border: `2px solid ${this.state.data.color}`,

            ':hover': {
                background: this.state.data.color,
                color: this.state.data.backgroundColor
            },
        };

        return (
            <div className="card" style={cardStyle}>
                <img src={this.state.data.logo} alt={`${this.state.data.title} logo`} className="image" />
                <div className="overlay" style={overlayStyle}>
                    <h3>{this.state.data.title}</h3>
                    <div className="text">
                        <RadiumLink className="card__links__button" style={btnStyle} to={this.state.data.demoURL}>Demo</RadiumLink>
                        <RadiumLink className="card__links__button" style={btnStyle} to={this.state.data.githubURL}>GitHub</RadiumLink>
                        <RadiumLink className="card__links__button" style={btnStyle} to={`/apps/info/${this.state.data.infoURLName}`}>More Info</RadiumLink>
                    </div>
                </div>
            </div>

        );
    }
};

export default Radium(Card);
