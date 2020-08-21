import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="copyright">&copy; <script>document.write(new Date().getFullYear())</script> MTFBWY</div>
        </footer>
    )
}

export default Footer;