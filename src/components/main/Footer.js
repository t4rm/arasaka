import React from 'react';
import "../../css/footer.css";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer>
            <div className='footer-credits'>
                <p>TAREK</p>
                <p>ARASAKA FICTIONAL WEBSITE</p>
            </div>
            <ul className='footer-links'>
                <li>
                    <Link to="mailto:contact@mechkenetarek.com?subject=arasaka">AI-MAIL</Link>
                </li>
                <li>
                    <Link to="https://github.com/t4rm" target='blank'>INTRA-HUB</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;