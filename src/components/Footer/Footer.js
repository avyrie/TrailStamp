import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="copyright">&copy; <script>document.write(new Date().getFullYear())</script> TrailStamp</div>
        </footer>
    )
}

export default Footer;