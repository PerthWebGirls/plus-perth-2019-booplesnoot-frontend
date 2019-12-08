import React from 'react';
import './Recipe.css';
import {Link} from 'react-router-dom';
import CookingTime from '../Atoms/CookingTime';


export const Recipe = ({id, title, cookTime, servings, ...props}) => {


    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card listing-preview">
                <img className="card-img-top" src={`https://spoonacular.com/recipeImages/${id}-556x370`} alt={title}/>
                <div className="card-img-overlay">
                    <h2>
                        <span className="badge badge-secondary text-white">{title}</span>
                    </h2>
                </div>
                <div className="card-body">
                    <div className="listing-heading text-center">
                        <div className="row">
                            <div className="col-6">
                                <i className="far fa-clock pr-1"></i>
                                <span>
                                <CookingTime cookingTimeMinutes={cookTime} />
                                </span>
                            </div>
                            <div className="col-6">
                                <i className="fas fa-utensils pr-2"></i>
                                <span>Serves {servings}</span>
                            </div>
                        </div>
                        <hr/>
                        <Link to={`/FullRecipePage/${id}`} className="btn btn-primary btn-block">
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Recipe;