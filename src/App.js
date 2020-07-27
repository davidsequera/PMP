import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route/>
        <Route exact path="/login" component={LogIn}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
