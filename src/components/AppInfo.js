import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import LazyLoad from 'react-lazyload';
import Placeholder from './Placeholder';
import { techObj } from '../data/tech';
const PrevButton = require('react-icons/lib/md/keyboard-arrow-left');
const NextButton = require('react-icons/lib/md/keyboard-arrow-right');


export const AppInfo = ({ app, prevHref, nextHref }) => {
    const btnStyle = {
        background: app.style.color,
        color: app.style.backgroundColor,
        border: `2px solid ${app.style.backgroundColor}`,

        ':hover': {
            background: app.style.backgroundColor,
            color: app.style.color
        },
    };
    return (
        <div className="app-info">
            <div className="content-container">
                <h1 style={{ color: app.style.backgroundColor }}>{app.title}</h1>
                <div className="content">
                    <div className="screenshot">
                        <LazyLoad 
                            height={'100%'} 
                            placeholder={<Placeholder src={app.screenshot} />}
                            once
                        >
                            <img src={`/images/${app.screenshot}`} alt={`${app.title} screenshot`} />
                        </LazyLoad> 
                        <a href={app.demoURL}><div className="gradient"></div></a>
                    </div>
                    <div className="text">
                        <div className="buttons">
                            <a className="card__links__button" style={btnStyle} key={app.demoURL} href={app.demoURL}>Demo</a>
                            {app.githubURL !== 'N/A' && <a className="card__links__button" style={btnStyle} key={app.githubURL} href={app.githubURL}>GitHub</a>}
                        </div>
                        <div className="app-info__description">
                            <p><strong>Description: </strong>{app.description}</p>
                        </div>
                        <div className="app-info__why">
                            <p><strong>Why I made <em>{app.title}</em>: </strong>{app.why}</p>
                        </div>
                        <div className="app-info__coolFeature">
                            <p><strong>What I'm proud of: </strong>{app.coolFeature}</p>
                        </div>
                        <div className="app-info__date">
                            <p><strong>Date: </strong>{app.date}</p>
                            <p id="tech-p"><strong>Tech: </strong></p>
                        </div>
                        <div className="app-info__tech">
                            {
                                app.techList.map((tech, i) => {
                                    return (
                                        <img src={techObj[tech].logo} alt={`${techObj[tech].name} logo`} title={`${techObj[tech].name}`} key={i} id={tech} className="tech-icon" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="nextOrPrev">
                    <div className="prev">
                        <Link to={`/about/${prevHref}`}>
                            <PrevButton />
                            <span>Previous</span>
                        </Link>
                    </div>
                    <div className="next">
                        <Link to={`/about/${nextHref}`}>
                            <span>Next</span>
                            <NextButton />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Radium(AppInfo);
