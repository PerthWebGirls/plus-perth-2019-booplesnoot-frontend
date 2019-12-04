import React from 'react';
import PageTemplate from '../Components/Templates/PageTemplate';


const AboutPage = (...props) => {
    return (
        <PageTemplate>
            <div className="container">
                <h3 className="text-center pt-4 pb-2">About Us</h3>
                <div className="row">
                    <div className="col-4">
                        <div className="card listing-preview mb-3">
                            <img className="card-img-top" src="/images/team/Beverlyresized.png" alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Beverly</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Github Manager</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Beverley's Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card listing-preview mb-3">
                            <img className="card-img-top" src="/images/team/chloeresized.jpg"alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Chloe</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Front-end React</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Chloe's Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card listing-preview mb-3">
                            <img className="card-img-top" src="/images/team/ellieresized.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Ellie</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Front-end HTML &amp; CSS</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Ellie's Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card listing-preview mb-5">
                            <img className="card-img-top" src="/images/team/francescaresized.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Francesca</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Project Manager</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Francesca's Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card listing-preview mb-5">
                            <img className="card-img-top" src="/images/team/roxanneresized.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Roxanne</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Back-end Django</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Roxanne's Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card listing-preview mb-5">
                            <img className="card-img-top" src="/images/team/zoeresized.jpg" alt=""/>
                            <div className="card-img-overlay">
                                <h2>
                                    <span className="badge badge-secondary text-white">Zoe</span>
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="listing-heading text-center">
                                    <h4 className="text-primary">Back-end Database</h4>
                                </div>
                                <hr/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Fusce pharetra felis nisl, at ultrices urna placerat et.
                                    Pellentesque et varius enim. Vivamus ac dictum leo, nec.
                                </p>
                                <hr/>
                                <a href="#" className="btn btn-primary btn-block">Zoe's Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}

export default AboutPage;
