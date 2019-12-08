import React, { Component } from 'react';
import { API_URL} from '../../Containers/AppContainer';
import LoadingIndicator from '../Atoms/LoadingIndicator';
import FoodFacts from '../Molecules/FoodFacts';

class FoodTrivia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            text: ""
        };
    }


    componentDidMount() {
        fetch(
            `${API_URL}/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3`, {
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
                text: data.text
            });
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    render() {
        const { isLoaded, text } = this.state;

        if (!isLoaded) {
            return <LoadingIndicator size="sm"/>
        }

        return (
            <FoodFacts
                trivia = {text}
            />
        )
    }
}

export default FoodTrivia;