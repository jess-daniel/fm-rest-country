import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"; 
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Switch>    
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
