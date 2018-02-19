import React from 'react';
import { Link } from 'react-router-dom';

export const Bio = () => (
    <div className="bio section">
        <div className="content-container">
            <div className="bio__content">
                <div className="bio__image">
                    <img src="/images/pizza.jpg" alt="Me with some great 'za" />
                </div>
                <div className="bio__jumbo">
                    <h2>FULL.</h2>
                    <h2>STACK.</h2>
                    <h2>DEVELOPER.</h2>
                    
                </div>
            </div>
        </div>
    </div>
);

export default Bio;
