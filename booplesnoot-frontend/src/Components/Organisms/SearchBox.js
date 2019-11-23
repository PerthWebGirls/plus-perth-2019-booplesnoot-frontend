import React from 'react';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';
import './SearchBox.css';



export const SearchBox = () => {
    return (        
        <section id="showcase">
            <div className="col-md-7">
                <div className="home-search p-5">
                    <div className="overlay p-5">
                        <h1 className="display-4 mb-4">
                            Search For A Perfect Recipe
                        </h1>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas, asperiores eveniet vel nostrum magnam
                            voluptatum tempore! Consectetur, id commodi!</p>
                        <div className="search">
                            <form action="search.html">
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <Label className="sr-only">
                                            ingredient 1
                                        </Label>
                                        <InputField
                                            name="ingredient 1"                                            
                                            placeholder="ingredient 1" 
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <Label className="sr-only">
                                            ingredient 2
                                        </Label>
                                        <InputField 
                                            name="ingredient 2" 
                                            placeholder="ingredient 2" 
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <Label className="sr-only">
                                            ingredient 3
                                        </Label>
                                        <InputField 
                                            name="ingredient 3"                                             
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
    )
}


export default SearchBox;