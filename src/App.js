import React from 'react';
import './App.css';
import Home from './components/Home';
import Lifestyles from './components/Lifestyles';
import {BrowserRouter, Route , Switch } from 'react-router-dom';
import Foods from './components/Foods';
import Travels from './components/Travels';
import Photographs from './components/Photographs';

function App() {
    
    return (
    <div className="mainBody">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lifestyles" exact component={Lifestyles} /> 
          <Route path="/foods" exact component={Foods} />    
          <Route path="/travels" exact component={Travels} />   
          <Route path="/photographs" exact component={Photographs} />   
          <Route render={()=><div>404 : Page Not Found</div>} />
        </Switch>
    </div>
        );
    }

export default App;