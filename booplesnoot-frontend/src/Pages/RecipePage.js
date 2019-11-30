import React, { Component } from 'react'
import PageTemplate from '../Components/Templates/PageTemplate';
import FeaturedRecipies from '../Components/Organisms/FeaturedRecipies';


class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            recipes: []
        };
    }


    componentDidMount() {
        fetch(
            `${API_URL}/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&number=12`, {
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
                recipes: data.results                
            }); 
        })
        .catch(function(err) {
            console.error(err);     
        });
    }
        
    render() {        
        const { isLoaded, recipes } = this.state; 
        

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
                        <h3 className="text-center pt-4 pb-2">Recipes</h3>
                        <div className="row">                    
                            {recipes.map(recipe => (
                                <Recipe 
                                    id={recipe.id}                               
                                    title={recipe.title}
                                    cookTime={recipe.readyInMinutes}
                                    servings={recipe.servings}
                                /> 
                            ))}                    
                        </div>
                    </div>
                </section> 
            </PageTemplate>                       
        </div>
    )
}

export default RecipePage; 