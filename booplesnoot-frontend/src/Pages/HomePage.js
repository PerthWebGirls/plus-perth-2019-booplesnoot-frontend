import React from 'react';
import PageTemplate from '../Components/Templates/PageTemplate';
import SearchBox from '../Components/Organisms/SearchBox';
import FeaturedRecipies from '../Components/Organisms/FeaturedRecipies';
import Something from '../Components/Molecules/Something';
import './HomePage.css';


const HomePage = () => {
    return (        
        <PageTemplate>         
            <SearchBox/>
            <section id="listings" className="py-5">
                <div className="container"> 
                    <h3 className="text-center mb-3">Featured Recipes</h3>                   
                    <div className="row">                         
                        <FeaturedRecipies/>  
                        <FeaturedRecipies/> 
                        <FeaturedRecipies/> 
                    </div>
                </div>
            </section> 
            <section id="services" class="py-5 bg-secondary text-white">
                <div class="container">
                    <div class="row text-center">
                        <Something/>  
                        <Something/>
                        <Something/> 
                    </div>
                </div>
            </section>
        </PageTemplate>        
    )        
}


export default HomePage;

