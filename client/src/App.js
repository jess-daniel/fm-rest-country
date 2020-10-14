import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"; 
import Home from './pages/Home';
import Header from './components/Header';
import CountryDetails from './pages/CountryDetails';
import themeContext from "./contexts/themeContext";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  return (
    <div className="App">
      <themeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Switch>  
        <Route path="/details/:country">
            <CountryDetails />
        </Route>  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </themeContext.Provider>
    </div>
  );
}

export default App;
