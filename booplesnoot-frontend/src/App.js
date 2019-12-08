import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './Containers/AppContainer';
import './vendor/bootstrap.css';
import './vendor/lightbox.css';
import ScrollToTop from '../src/Components/Atoms/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </Router>
  );
}

export default App;