import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

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
                    </div>
                    <div className="text">
                        <div className="buttons">
                            <a className="card__links__button" style={btnStyle} key={app.demoURL} href={app.demoURL}>Demo</a>
                            <a className="card__links__button" style={btnStyle} key={app.githubURL} href={app.githubURL}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Radium(AppInfo);
