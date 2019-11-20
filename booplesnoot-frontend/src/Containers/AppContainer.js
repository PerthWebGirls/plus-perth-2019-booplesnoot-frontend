import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import RecipePage from '../Pages/RecipePage';


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
          </>
        );
      }
    }
    
export default AppContainer;