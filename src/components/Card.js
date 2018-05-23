import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
const RadiumLink = Radium(Link);
import LazyLoad from 'react-lazyload';
import Placeholder from './Placeholder';

class Card extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            blockStyle: {
                'display': 'block'
            },
            ...props
        }
    }

    restoreBlock() {
        this.setState({
            blockStyle: {
                'display': 'block'
            }
        });
    }

    removeBlock() {
        setTimeout(() => {
            this.setState({
                blockStyle: {
                    'display': 'none'
                }
            });
        }, 100);
    }

    render() {
        const cardStyle = {
            color: this.state.data.style.color
        }
        const overlayStyle = {
            background: this.state.data.style.backgroundColor
        }

        const btnStyle = {
            background: this.state.data.style.backgroundColor,
            color: this.state.data.style.color,
            border: `2px solid ${this.state.data.style.color}`,

            ':hover': {
                background: this.state.data.style.color,
                color: this.state.data.style.backgroundColor
            },
        };

        // block buttons until 10 ms after mouse has entered card or 10ms after mouse has clicked card (for weird mobile bug)
            // to reproduce bug on mobile, click more info on one
            // click back
            // click to induce hover
            // try to click more info, doesn't work
            // onMouseUp event fixed it
        // block buttons on mouseLeave

        return (
            <div className="card" style={cardStyle} onMouseEnter={() => this.removeBlock()} onMouseLeave={() => this.restoreBlock()} onMouseUp={() => this.removeBlock()}>
                <LazyLoad
                    height={'100%'}
                    placeholder={<Placeholder src={this.state.data.logo} dataAlt={this.state.data.title} />}
                    once
                    offset={600}
                >
                    <img src={`/images/${this.state.data.logo}`} alt={`${this.state.data.title} logo`} className="image" />
                </LazyLoad>
                <div className="overlay" style={overlayStyle}>
                    <h3>{this.state.data.title}</h3>
                    <div className="text">

                        <div className="block" style={this.state.blockStyle}></div>

                        <a className="card__links__button" style={btnStyle} key={this.state.data.demoURL} href={this.state.data.demoURL}>Demo</a>
                        <a className="card__links__button" style={btnStyle} key={this.state.data.githubURL} href={this.state.data.githubURL}>GitHub</a>
                        <RadiumLink className="card__links__button" style={btnStyle} to={`/about/${this.state.data.infoURLName}`}>More Info</RadiumLink>
                    </div>
                </div>
            </div>

        );
    }
};

export default Radium(Card);
