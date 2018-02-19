import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => (
    <div className="section section__secondary" id="about">
        <div className="content-container">
            <h3>about</h3>
            <div className="about__content">
                <div className="about__bio">
                    <p>I love to understand the way things work. Everything - from simple kitchen gadgets to complex calculus equations. Understanding helps equip me to create. And <strong>I <em>love</em> to create.</strong></p>
                    <p>My passion is making <strong>responsive, mobile-first web applications and websites.</strong></p>
                    <p>When I’m not clickin' away at my keyboard, you’ll find me playing the guitar, reading, or cooking.</p>
                </div>
                <div className="about__languages">
                    <p><strong>Languages:</strong> JavaScript, some Python, a little C</p>
                    <p><strong>Libraries &amp; Frameworks:</strong> React, Redux, Node.js, Express, Webpack, Babel, SCSS, jQuery, Semantic-UI, Bootstrap</p>
                    <p><strong>Databases:</strong> MongoDB, Firebase</p>
                    <p><strong>Testing:</strong> Mocha, Chai, Selenium, WebdriverIO, Jest</p>
                </div>
            </div>
        </div>
    </div>
);

export default About;
