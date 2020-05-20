import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio'

function App() {
  return (
    <div>
    <Header />
    <div classname='main'>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
