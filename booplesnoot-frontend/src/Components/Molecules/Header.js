import React from 'react';

export const Header = () => {
    return (
        <div>
            <section id="top-bar" className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <i className="fas fa-phone"></i>(61) 111 222 333
                        </div>
                        <div className="col-md-4">
                            <i className="fas fa-envelope-open"></i>contact@something.com
                        </div>
                        <div className="col-md-4">
                            <div className="social text-right">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;