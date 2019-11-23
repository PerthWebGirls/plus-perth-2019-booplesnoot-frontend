import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './Containers/AppContainer';
import './vendor/bootstrap.css';
import './vendor/lightbox.css';
import './App.css';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;