import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-400">
            <div className="container mx-auto p-5 ">{new Date().getFullYear()}</div>
        </footer>
    );
};

export default Footer;