import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Overlay from './Overlay';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            ...props
        }
    }

    handleMouseHover() {
        this.setState({
            isHovering: !this.state.isHovering,
        });
    }

    render() {
        const cardStyle = {
            color: this.state.data.style.color
        }

        return (
            <div className="card" style={cardStyle} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <img src={this.state.data.logo} alt={`${this.state.data.title} logo`} className="image" />
                {this.state.isHovering && <Overlay {...this.state} />}
                
            </div>
        );
    }
};

export default Card;

