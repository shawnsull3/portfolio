import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';

function App() {
  return (
    <div>
    <Header />
    <div classname='main'>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
