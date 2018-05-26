import React from 'react';
const FacebookLogo = require('react-icons/lib/fa/facebook');
const LinkedInLogo = require('react-icons/lib/fa/linkedin');
const OldMediumLogo = require('react-icons/lib/fa/medium');
const GitHubLogo = require('react-icons/lib/fa/github');
const Envelope = require('react-icons/lib/fa/envelope');

const Footer = () => (
    <div className="section section__secondary footer" id="contact">
        <div className="content-container">
            <h3>contact</h3>
            <div className="footer__content">
                <div className="footer__icons">
                    <a href="https://github.com/jaketripp" aria-label="GitHub link" title="GitHub"><GitHubLogo /></a>
                    <a href="https://www.linkedin.com/in/jake-tripp/" aria-label="LinkedIn link" title="LinkedIn"><LinkedInLogo /></a>
                    <a href="https://medium.com/@jaketripp" aria-label="Medium link" title="Medium"><OldMediumLogo /></a>
                    <a href="https://www.facebook.com/jaketripp95" aria-label="Facebook link" title="Facebook"><FacebookLogo /></a>
                    <a href="mailto:jake@jaketripp.com" aria-label="Email link" title="jake@jaketripp.com"><Envelope /></a>
                </div>
                <div className="footer__copyright">
                    <p>Jake Tripp &copy; 2018</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
