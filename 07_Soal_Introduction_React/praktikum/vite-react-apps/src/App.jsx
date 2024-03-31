import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import HeroSection from './components/herosection';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/hero" component={HeroSection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;