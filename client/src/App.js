import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"; 
import { ReactQueryDevtools } from 'react-query-devtools'
import Home from './pages/Home';
import Header from './components/Header';
import CountryDetails from './pages/CountryDetails';
import themeContext from "./contexts/themeContext";
import searchContext from './contexts/searchContext';

function App() {
  const [theme, setTheme] = useState(false);
  const [filteredData, setFilteredData] = useState({});

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
        <searchContext.Provider value={{ filteredData, setFilteredData }}>
          <Home />
        </searchContext.Provider>
        </Route>
      </Switch>
      </themeContext.Provider>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
