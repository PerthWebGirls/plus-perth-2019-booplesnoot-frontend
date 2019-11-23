import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../Components/Templates/PageTemplate';
import { API_URL } from '../Containers/AppContainer';
import './FullRecipePage.css'


class FullRecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            recipe: null
        };
    }


    componentDidMount() {     
        const { id } = this.props.match.params;

        fetch(
            `${API_URL}/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${id}&includeNutrition=true`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"

                }
            }
        ) 
        .then(response => response.json())
        .then(data => {        
            this.setState({
                isLoaded: true,
                recipe: data[0]                
            }); 
        })
        .catch(function(err) {
            console.error(err);     
        });
    }
        
    render() {        
        const { isLoaded, recipe } = this.state; 
            

        if (!isLoaded) {            
            return (
                <PageTemplate>            
                    <div>Loading...</div> 
                </PageTemplate> 
            )
        } else {
            return (
                <PageTemplate>
                    <div className="container">
                        <h3 className="text-center pt-4 pb-2">Recipe</h3>
                        <div className="row">                  
                            <section id="listing" className="py-4">
                                <div className="container">
                                    <Link to="/Recipes" className="btn btn-light mb-4">
                                        Back To Recipies
                                    </Link>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h2>
                                                <span className="badge badge-secondary text-white pb-2">{recipe.title}</span>
                                            </h2>                        
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <img
                                            src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393`} alt=""
                                            className="img-main img-fluid mb-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-5 fields">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-secondary">
                                                    <i className="fas fa-utensils pr-2"></i>
                                                    <span className="float-right">Serves 2</span>
                                                </li>
                                                <li className="list-group-item text-secondary" id="cookingtime">
                                                    <i className="far fa-clock pr-1"></i>
                                                    <span className="float-right">Preperation time: {recipe.preparationMinutes}min.</span>
                                                    <span className="float-right">Cooking time: {recipe.cookingMinutes}min.</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item text-secondary">
                                                    <i className="fas fa-seedling pr-1"></i>Gluten Free 
                                                    <span className="float-right">{recipe.glutenFree ? 'Yes' : 'No'} 
                                                    </span>
                                                </li>
                                                <li className="list-group-item text-secondary">
                                                    <i className="fas fa-carrot pr-1"></i>Vegetarian
                                                    <span className="float-right">{recipe.vegatarian ? 'Yes' : 'No'}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row mb-5 fields">                                        
                                        {recipe.extendedIngredients.map(ingredient => (                                                                                     
                                            <div className="col-md-6" key={ingredient.id}>                                                
                                                    <li className="list-group-item text-secondary">
                                                        <i className="fas fa-shopping-basket pr-1"></i> {ingredient.name}
                                                        <span className="float-right">{ingredient.measures.us.amount} {ingredient.measures.us.unitShort}</span>
                                                    </li>
                                            </div>                                                                                     
                                        ))}                                        
                                    </div> 
                                    <div className="row mb-5 fields"> 
                                        <h3 className="text-secondary">Equipment:</h3>                                
                                        {recipe.analyzedInstructions.map(instructions => (  
                                            instructions.steps.map(step => ( 
                                                step.equipment.map(equipment => (                                                                                                          
                                                    <div className="col-md-12">
                                                        <li className="text-secondary">
                                                            {equipment.name}        
                                                        </li>                                       
                                                    </div> 
                                                 ))   
                                             ))                                                                                       
                                        ))}                                        
                                    </div>                                   
                                    <div className="row mb-5 fields"> 
                                        <h3 className="text-secondary">Instructions:</h3>                                
                                        {recipe.analyzedInstructions.map(instructions => (  
                                            instructions.steps.map(step => (                                                                                                                             
                                                <div className="col-md-12">
                                                <ul>
                                                    <li className="text-secondary">
                                                        {step.step}                                               
                                                    </li>
                                                </ul>
                                                </div> 
                                             ))                                                                                       
                                        ))}                                        
                                    </div>                                        
                                </div>
                            </section>               
                        </div>
                    </div>
                </PageTemplate>
            )
        }

        
    }
}


export default FullRecipePage; 