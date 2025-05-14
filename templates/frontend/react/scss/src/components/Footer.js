import React from "react";
import "../scss/components/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>
                        &copy; {new Date().getFullYear()} React SCSS Template
                        <span className="footer-icons">
                            <span className="icon" role="img" aria-label="heart">❤️</span>
                            <span className="icon" role="img" aria-label="rocket">🚀</span>
                            <span className="icon" role="img" aria-label="sparkles">✨</span>
                        </span>
                        <span className="footer-credit">Crafted with passion by <strong>Nithin</strong></span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

