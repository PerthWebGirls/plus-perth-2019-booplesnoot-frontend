import React from 'react';
import PageTemplate from '../Components/Templates/PageTemplate';
import SearchBox from '../Components/Organisms/SearchBox';
import FeaturedRecipes from '../Components/Organisms/FeaturedRecipes';
import FoodTrivia from '../Components/Organisms/FoodTrivia';
import './HomePage.css';


const HomePage = () => {
    return (
        <PageTemplate>
            <SearchBox/>
            <section id="listings" className="py-5">
                <div className="container">
                    <h3 className="text-center mb-3 mt-3">Featured Recipes</h3>
                    <div className="row">
                        <FeaturedRecipes/>
                    </div>
                </div>
            </section>
            <section id="services" className="py-5 bg-secondary text-white">
                <div className="container">
                    <div className="triviaContainer">
                        <div className="row text-center">
                            <FoodTrivia/>
                            <FoodTrivia/>
                            <FoodTrivia/>
                        </div>
                    </div>
                </div>
            </section>
        </PageTemplate>
    )
}

export default HomePage;