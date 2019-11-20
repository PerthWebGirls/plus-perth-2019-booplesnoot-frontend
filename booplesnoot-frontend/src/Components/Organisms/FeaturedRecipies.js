import React, { Component } from 'react';
import './FeaturedRecipies.css';

class FeaturedRecipies extends Component {
    render() {
        return (            
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card listing-preview">
                    <img className="card-img-top" src="images/recipes/1.jpg" alt=""/>
                    <div className="card-img-overlay">
                        <h2>
                            <span className="badge badge-secondary text-white">Chicken Base</span>
                        </h2>
                    </div>
                    <div className="card-body">
                        <div className="listing-heading text-center">
                            <h4 className="text-primary">Food Name 1</h4>
                            <p>
                            <i className="fas fa-map-marker text-secondary"></i> Spanish cuisine</p>
                        </div>
                        <hr/>
                        <div className="row py-2 text-secondary">
                            <div className="col-6">
                            <i className="fas fa-th-large"></i> item 1</div>
                            <div className="col-6">
                            <i className="fas fa-th-large"></i> item 2</div>
                        </div>
                        <div className="row py-2 text-secondary">
                            <div className="col-6">
                            <i className="fas fa-th-large"></i> item 3</div>
                            <div className="col-6">
                            <i className="fas fa-th-large"></i> item 4</div>
                        </div>
                        <hr/>
                        <div className="row py-2 text-secondary">
                            <div className="col-6">
                            <i className="fas fa-user"></i> Ellie S</div>
                        </div>
                        <div className="row text-secondary pb-2">
                            <div className="col-6">
                            <i className="fas fa-clock"></i> 1 day ago</div>
                        </div>
                        <hr/>
                        <a href="listing.html" className="btn btn-primary btn-block">More Info</a>
                    </div>
                </div>
            </div>            
        )
    }
}

export default FeaturedRecipies;