import React from 'react';
import Footer from './Footer';
import Header from './Header';

const ContactPage = () => (
    <div>
        <Header />
        <div className="app-info">
            <form className="ui form" method="post" action="mailer.php" onsubmit="checkSuccess()">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Elon Musk" />
                </div>

                <div className="field">
                    <label>Company</label>
                    <input type="text" name="company" placeholder="Tesla / SolarCity / SpaceX / OpenAI / Neuralink / Hyperloop / The Boring Company" />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="puppylover71@gmail.com" />
                </div>

                <div className="field">
                    <label>Phone</label>
                    <input type="tel" name="phone" placeholder="1-800-ELON-MUSK" />
                </div>

                <div className="field">
                    <label>Message</label>
                    <textarea name="message" rows="4" maxlength="1000" placeholder="Hi Jake, I would like to hire you. I can tell that you would be a strong asset to have on my team. Please respond quickly, the future of the world is at stake."></textarea>
                </div>

                <div className="actions">
                    <button type="button" className="ui deny button">Cancel</button>
                    <button type="submit" className="ui blue submit button">Send Message</button>
                </div>

                <div className="ui error message"></div>
            </form>
        </div>
        <Footer />
    </div>
);

export default ContactPage;
