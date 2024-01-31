import React from 'react';
import Container from '../Shard/Container';
const Footer = () => {
    return (
        <Container>
            <footer className="footer mt-auto py-3 bg-light mt-12 custom-margin">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4">
                            <h5>Column 1</h5>
                            <ul className="list-unstyled">
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-4">
                            <h5>Column 2</h5>
                            <ul className="list-unstyled">
                                <li>Link 4</li>
                                <li>Link 5</li>
                                <li>Link 6</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="col-md-4">
                            <h5>Column 3</h5>
                            <ul className="list-unstyled">
                                <li>Link 7</li>
                                <li>Link 8</li>
                                <li>Link 9</li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-muted">Your Company Name &copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    );
};

export default Footer;
