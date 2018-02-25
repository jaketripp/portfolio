import React from 'react';
const FacebookLogo = require('react-icons/lib/fa/facebook');
const LinkedInLogo = require('react-icons/lib/fa/linkedin');
const OldMediumLogo = require('react-icons/lib/fa/medium');
const GitHubLogo = require('react-icons/lib/fa/github');

const Footer = () => (
    <div className="footer">
        <div className="footer__content">
            <div className="footer__icons">
                
                <a href="https://github.com/jaketripp" aria-label="Github link"><GitHubLogo /></a>
                <a href="https://www.linkedin.com/in/jake-tripp/" aria-label="LinkedIn link"><LinkedInLogo /></a>
                <a href="https://medium.com/@jaketripp" aria-label="Medium link"><OldMediumLogo /></a>
                <a href="https://www.facebook.com/jaketripp95" aria-label="Facebook link"><FacebookLogo /></a>
            </div>
            <div className="footer__copyright">
                <p>Jake Tripp &copy; 2018</p>
            </div>
        </div>
    </div>
);

export default Footer;
