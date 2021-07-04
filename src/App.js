import React from 'react'
import './App.css';
import HomePage from './components';
import CssBaseline from '@material-ui/core/CssBaseline'
import Resume from './components/Resume'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={HomePage} />
      <Route path="/resume" component={Resume} />

    </>
  );
}

export default App;
