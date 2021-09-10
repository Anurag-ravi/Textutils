import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const removeClass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) => {
    removeClass()
    document.body.classList.add('bg-'+cls)
    if(cls === null){
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = '#042743'
      } else {
        setmode('light')
        document.body.style.backgroundColor = 'white'
      }
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform heading="Enter you text to do some stuff" mode={mode}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
