import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import { techObj } from '../data/tech';

export const AppInfo = ({ app }) => {
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
                        <img src={app.screenshot} alt={`${app.title} screenshot`} />
                        <a href={app.demoURL}><div className="gradient"></div></a>
                    </div>
                    <div className="text">
                        <div className="buttons">
                            <a className="card__links__button" style={btnStyle} key={app.demoURL} href={app.demoURL}>Demo</a>
                            <a className="card__links__button" style={btnStyle} key={app.githubURL} href={app.githubURL}>GitHub</a>
                        </div>
                        <div className="app-info__description">
                            <p><strong>Description: </strong>{app.description}</p>
                        </div>
                        <div className="app-info__why">
                            <p><strong>Why I made <em>{app.title}</em>: </strong>{app.why}</p>
                        </div>
                        <div className="app-info__coolFeature">
                            <p><strong>Feature(s) I'm proud of: </strong>{app.coolFeature}</p>
                        </div>
                        <div className="app-info__date">
                            <p><strong>Date: </strong>{app.date}</p>
                            <p style={{marginBottom: '0px'}}><strong>Tech: </strong></p>
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
            </div>
        </div>
    );
}

export default Radium(AppInfo);
