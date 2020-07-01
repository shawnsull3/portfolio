import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio/Portfolio';
import ProjectDetails from './Portfolio/ProjectDetails';
import About from './About';
import Books from './Books/Books';
import BookNotes from './Books/BookNotes';
import '../styles/App.css';

function App() {
  return (
    <div className='container-flex h-100'>
      <div className='d-flex justify-content-center'>
        <div>
          <div className='row'>
            <Header />
          </div>
          <div className='row'>
            <Switch>
              <Route exact path='/'/>
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/portfolio/:projectTitle' component={ProjectDetails} />
              <Route exact path='/about' component={About} />
              <Route exact path='/books' component={Books} />
              <Route exact path='/books/:bookTitle' component={BookNotes} />
            </Switch>
            </div>
        </div>
	    </div>
    </div>
  );
}

export default App;
