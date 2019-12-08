import React from 'react'
import trivia from '../Organisms/FoodTrivia';

const FoodFacts = ({trivia}) => {
    return (
        <div className="col-md-4 col-lg-4 mb-4">
            <i class="fas fa-question fa-4x mr-4"></i>
            <hr/>
            <h3>Did you know?</h3>
            <p>{trivia}</p>
        </div>
    )
}

export default FoodFacts;

