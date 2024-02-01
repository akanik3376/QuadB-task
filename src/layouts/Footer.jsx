import React from 'react';
import Container from '../Shard/Container';

const Footer = () => {
    return (
        <Container>
            <footer className="footer mt-auto py-3 bg-light mt-12 custom-margin">
                <div className="container">
                    {/* Copyright */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-muted">&copy; {new Date().getFullYear()} MovieHub 2k24</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;
