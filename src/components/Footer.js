import React from 'react';
const YouTubeLogo = require('react-icons/lib/fa/youtube');
const LinkedInLogo = require('react-icons/lib/fa/linkedin');
const OldMediumLogo = require('react-icons/lib/fa/medium');
const GitHubLogo = require('react-icons/lib/fa/github');
const Envelope = require('react-icons/lib/fa/envelope');
const SoundCloudLogo = require('react-icons/lib/fa/soundcloud');
const InstagramLogo = require('react-icons/lib/fa/instagram');

const Footer = () => (
    <div className="section section__secondary footer" id="contact">
        <div className="content-container">
            <h3>contact</h3>
            <div className="footer__content">
                <div className="footer__icons">
                    <a href="https://github.com/jaketripp" aria-label="GitHub link" title="GitHub"><GitHubLogo /></a>
                    <a href="https://www.linkedin.com/in/jake-tripp/" aria-label="LinkedIn link" title="LinkedIn"><LinkedInLogo /></a>
                    <a href="https://medium.com/@jaketripp" aria-label="Medium link" title="Medium"><OldMediumLogo /></a>
                    <a href="mailto:jake@jaketripp.com" aria-label="Email link" title="jake@jaketripp.com"><Envelope /></a>
                    <a href="https://www.youtube.com/channel/UCGWw6-QNLp_vAIRn1ANGh9g?view_as=subscriber" aria-label="YouTube link" title="YouTube"><YouTubeLogo /></a>
                    <a href="https://soundcloud.com/the-jake-tripp" aria-label="SoundCloud link" title="SoundCloud"><SoundCloudLogo /></a>
                    <a href="https://www.instagram.com/thejaketripp/" aria-label="Instagram link" title="Instagram"><InstagramLogo /></a>
                </div>
                <div className="footer__copyright">
                    <p>Jake Tripp &copy; 2018</p>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
