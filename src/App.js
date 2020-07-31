import React from 'react';
import Layout from './layout/Layout';
import LogIn from './pages/LogIn';
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={LogIn}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
