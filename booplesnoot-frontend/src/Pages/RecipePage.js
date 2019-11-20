import React from 'react'
import PageTemplate from '../Components/Templates/PageTemplate';
import FeaturedRecipies from '../Components/Organisms/FeaturedRecipies';

const RecipePage = () => {
    return (
        <div>
            <PageTemplate>
                <section id="listings" className="py-5">
                    <div className="container"> 
                        <h3 className="text-center mb-3">Recipes</h3>                   
                        <div className="row">                         
                            <FeaturedRecipies/>  
                            <FeaturedRecipies/> 
                            <FeaturedRecipies/> 
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                            <FeaturedRecipies/>
                        </div>
                    </div>
                </section> 
            </PageTemplate>                       
        </div>
    )
}

export default RecipePage;

