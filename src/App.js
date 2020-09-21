import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Course from './pages/Course';
import SingUp from './pages/SingUp';
import SignIn from './pages/SignIn';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './microcomponents/Loading';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" component={SingUp}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/loading" component={Loading}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
