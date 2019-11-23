import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import RecipePage from '../Pages/RecipePage';
import FullRecipePage from '../Pages/FullRecipePage';

export const API_URL = "https://api.spoonacular.com";



class AppContainer extends Component { 
  render() {      
    return (
      <>
        <Route
          path="/"
          component={() => {
            return (
              <HomePage/>
            );
          }}
          exact
        />
        <Route
          path="/Recipes"
          component={() => {
            return (
              <RecipePage/>
            );
          }}
        />    
        <Route
          path="/LoginPage"
          component={() => {
            return (
              <LoginPage/>
            );
          }}
        />
        <Route
          path="/RegisterPage"
          component={() => {
            return (
              <RegisterPage/>
            );
          }}
        />
        <Route
          path="/FullRecipePage/:id"
          component={FullRecipePage}
        />
      </>
    );
  }
}
    
export default AppContainer;