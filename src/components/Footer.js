import React from 'react';
const FacebookLogo = require('react-icons/lib/fa/facebook');
const LinkedInLogo = require('react-icons/lib/fa/linkedin');
const OldMediumLogo = require('react-icons/lib/fa/medium');
const GitHubLogo = require('react-icons/lib/fa/github');

const Footer = () => (
    <div className="footer">
        <div className="footer-content">
            <div className="icons">
                
                <a href="https://github.com/jaketripp"><GitHubLogo /></a>
                <a href="https://www.linkedin.com/in/jake-tripp/"><LinkedInLogo /></a>
                <a href="https://medium.com/@jaketripp"><OldMediumLogo /></a>
                <a href="https://www.facebook.com/jaketripp95"><FacebookLogo /></a>
            </div>
            <div className="copyright">
                <p>Jake Tripp &copy; 2018</p>
            </div>
        </div>
    </div>
);

export default Footer;
