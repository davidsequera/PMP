import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Course from './pages/Course';
import SingUp from './pages/SingUp';
import SignIn from './pages/SignIn';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loading from './microcomponents/Loading';

function App() {
  const loggedIn = true
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/">
              {loggedIn? <Course/> : <Redirect to="/signin"/>}
            </Route>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SingUp}/>
            <Route exact path="/loading" component={Loading}/>
            <Route path="/static/media/11.785d5fdc.mp4" component={NotFound}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
