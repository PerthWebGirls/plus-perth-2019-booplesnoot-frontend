import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PageTemplate from '../Components/Templates/PageTemplate';
import Recipe from '../Components/Organisms/Recipe';
import { API_URL} from '../Containers/AppContainer';

const DEFAULT_REQUEST_PARAMS = {
    ingredients: {}
};


class RecipePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            recipes: []
        };
    }


    componentDidMount() {

        let url = new URL(`${API_URL}/recipes/search`);
        let request = this.props.location.state || DEFAULT_REQUEST_PARAMS;
        let ingredients = Object.values(request.ingredients).filter(
            Boolean
        );
        let params = {
            apiKey: process.env.REACT_APP_API_KEY,
            query: ingredients.join(','),
            number: 12
        };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


        fetch(
            url, {
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
                </PageTemplate>
            )
        }


    }
}

export default withRouter(RecipePage);