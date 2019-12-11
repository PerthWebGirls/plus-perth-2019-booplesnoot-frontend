import React, { Component } from 'react';
import update from 'immutability-helper';
import { withRouter } from 'react-router-dom';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';
import './SearchBox.css';


class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                0: '',
                1: '',
                2: ''
            }
        };

        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    updateSearch(index) {

        return (event) => {
            let ingredients = this.state.ingredients;

            this.setState({
                ingredients: update(ingredients, {[index]: {$set: event.target.value}})
            });
        }
    }

    handleSubmit(event) {
        this.props.history.push({
            pathname: '/Recipes',
            state: {ingredients: this.state.ingredients}
        });

        event.preventDefault();
    }

    render() {
    return (
            <div>
                <section id="showcase">
                    <div className="col-md-7">
                        <div className="home-search p-5">
                            <div className="overlay p-5">
                                <h1 className="display-4 mb-4">
                                    Search For A Perfect Recipe
                                </h1>
                                <p className="lead">Want to find the perfect recipe which uses the ingredients in your cuboard? Type in the ingreidents that you have below to search for a delicious recipe!</p>
                                <div className="search">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-row">
                                            <div className="col-md-4 mb-3">
                                                <Label className="sr-only">
                                                    Ingredient 1
                                                </Label>
                                                <InputField
                                                    value={this.state.ingredients[0]}
                                                    onChange={this.updateSearch(0)}
                                                    placeholder="ingredient 1"
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <Label className="sr-only">
                                                    Ingredient 2
                                                </Label>
                                                <InputField
                                                    value={this.state.ingredients[1]}
                                                    onChange={this.updateSearch(1)}
                                                    placeholder="ingredient 2"

                                                />

                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <Label className="sr-only">
                                                    Ingredient 3
                                                </Label>
                                                <InputField
                                                    value={this.state.ingredients[2]}
                                                    onChange={this.updateSearch(2)}
                                                    placeholder="ingredient 3"
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            className="btn btn-secondary btn-block mt-4">
                                            Submit form
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(SearchBox);
