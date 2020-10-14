import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"; 
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  // TODO: change to useContext
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Switch>    
        <Route path="/">
          <Home darkMode={darkMode}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
