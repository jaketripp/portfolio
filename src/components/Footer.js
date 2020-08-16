import React from "react";
import {
	FaYoutube,
	FaLinkedinIn,
	FaMediumM,
	FaGithub,
	FaEnvelope,
	FaSoundcloud,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => (
	<div className="section section__secondary footer" id="contact">
		<div className="content-container">
			<h3>contact</h3>
			<div className="footer__content">
				<div className="footer__icons">
					<a href="https://github.com/jaketripp" aria-label="GitHub link" title="GitHub">
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/jaketripp/"
						aria-label="LinkedIn link"
						title="LinkedIn"
					>
						<FaLinkedinIn />
					</a>
					<a href="https://medium.com/@jaketripp" aria-label="Medium link" title="Medium">
						<FaMediumM />
					</a>
					<a
						href="mailto:jake@jaketripp.com"
						aria-label="Email link"
						title="jake@jaketripp.com"
					>
						<FaEnvelope />
					</a>
					<a
						href="https://www.youtube.com/channel/UCGWw6-QNLp_vAIRn1ANGh9g"
						aria-label="YouTube link"
						title="YouTube"
					>
						<FaYoutube />
					</a>
					<a
						href="https://soundcloud.com/the-jake-tripp"
						aria-label="SoundCloud link"
						title="SoundCloud"
					>
						<FaSoundcloud />
					</a>
					<a
						href="https://www.instagram.com/thejaketripp/"
						aria-label="Instagram link"
						title="Instagram"
					>
						<FaInstagram />
					</a>
				</div>
				<div className="footer__copyright">
					<p>Jake Tripp &copy; {new Date().getFullYear()}</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
