import React, { Component } from 'react'
import PageTemplate from '../Components/Templates/PageTemplate';
import Recipe from '../Components/Organisms/Recipe';
import { API_URL} from '../Containers/AppContainer';
import RecipePagination from '../Components/Organisms/RecipePagination';
import LoadingIndicator from '../Components/Atoms/LoadingIndicator';
import FeaturedRecipies from '../Components/Organisms/FeaturedRecipies';

const DEFAULT_REQUEST_PARAMS = {
    ingredients: {}
};


class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            recipes: [],
            totalResults: null,
            offset: 0,
            number: 12
        };

        this.paginationDidChange = this.paginationDidChange.bind(this);
    }

    paginationDidChange(current, pageSize) {
        this.setState({
            isLoaded: false,
            offset: (current - 1) * pageSize,
            number: pageSize
        }, this.componentDidMount);
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
            offset: this.state.offset,
            number: this.state.number

        };

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


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
                recipes: data.results,
                totalResults: data.totalResults
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
                    <LoadingIndicator/>
                </PageTemplate>
            )
        } else {
            return (
                <PageTemplate>
                    <div className="container">
                        <h3 className="text-center pt-4 pb-2">Recipes</h3>
                        <div className="row justify-content-end">
                            <RecipePagination
                                offset={this.state.offset}
                                number={this.state.number}
                                totalResults={this.state.totalResults}
                                onChange={this.paginationDidChange}
                            />
                        </div>
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
                        <div className="row justify-content-end">
                            <RecipePagination
                                offset={this.state.offset}
                                number={this.state.number}
                                totalResults={this.state.totalResults}
                                onChange={this.paginationDidChange}
                            />
                        </div>
                    </div>
                </PageTemplate>
            )
        }


    }
}

export default RecipePage; 