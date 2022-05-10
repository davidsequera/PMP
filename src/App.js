import React,{useContext} from 'react';
import './App.css';
import Layout from './layout/Layout';
import Chapters from './pages/Chapters';
import SingUp from './pages/SingUp';
import SignIn from './pages/SignIn';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loading from './microcomponents/Loading';
import UserContextPovider from './layout/context/UserContext'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';

function App() {
  const {jwt} = useContext(UserContextPovider)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin">
                {/* {!jwt? <SignIn/> : <Redirect to="/"/>}              */}
                <SignIn/>         
              </Route> 
            <Route exact path="/signup" component={SingUp}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/courses">
              {jwt? <Courses/> : <Redirect to="/signin"/>}
            </Route>
            <Route exact path="/courses/:courseId">
              {jwt? <Chapters/> : <Redirect to="/signin"/>}
            </Route>
            <Route exact path="/loading" component={Loading}/>
            <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
