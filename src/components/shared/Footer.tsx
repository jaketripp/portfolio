import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaSoundcloud,
  FaYoutube,
} from 'react-icons/fa'

const Footer: React.FC = () => (
  <div className="section section__secondary footer" id="contact">
    <div className="content-container">
      <h3>contact</h3>
      <div className="footer__content">
        <div className="footer__icons">
          <a
            href="https://github.com/jaketripp"
            aria-label="GitHub link"
            title="GitHub"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jaketripp/"
            aria-label="LinkedIn link"
            title="LinkedIn"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://medium.com/@jaketripp"
            aria-label="Medium link"
            title="Medium"
            target="_blank"
          >
            <FaMediumM />
          </a>
          <a
            href="https://www.youtube.com/channel/UCGWw6-QNLp_vAIRn1ANGh9g"
            aria-label="YouTube link"
            title="YouTube"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            href="https://soundcloud.com/the-jake-tripp"
            aria-label="SoundCloud link"
            title="SoundCloud"
            target="_blank"
          >
            <FaSoundcloud />
          </a>
        </div>
        <div className="footer__copyright">
          <p>Jake Tripp &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
