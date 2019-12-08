import React, { Component } from 'react';
import { API_URL} from '../../Containers/AppContainer';
import Recipe from './Recipe';
import './FeaturedRecipes.css';
import LoadingIndicator from '../Atoms/LoadingIndicator';


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
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    render() {
        const { isLoaded, recipes } = this.state;

        if (!isLoaded) {
            return <LoadingIndicator size="sm"/>
        }

        return (
            <div className="container">
                <div className="row">
                    {recipes.map(recipe => (
                        <Recipe
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            cookTime={recipe.readyInMinutes}
                            servings={recipe.servings}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default FeaturedRecipes;