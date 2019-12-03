import React, { Component } from 'react';
import { API_URL} from '../../Containers/AppContainer';
import Recipe from '../Organisms/Recipe';
import './FeaturedRecipes.css';


class FeaturedRecipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            recipes: []
        };
    }


    componentDidMount() {
        fetch(
            `${API_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&veryPopular=true`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoaded: true,
                recipes: data.recipes
            });
            console.log(data);
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    render() {
        const { isLoaded, recipes } = this.state;
            return (
                <div className="container">
                    <div className="row">
                        {recipes.map(recipes => (
                            <Recipe
                                id={recipes.id}
                                title={recipes.title}
                                cookTime={recipes.readyInMinutes}
                                servings={recipes.servings}
                            />
                        ))}
                    </div>
                </div>

            )
        }
    }



export default FeaturedRecipes;