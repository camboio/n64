import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './nav';
import Footer from './footer';
import Home from './content/home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="app-container">
            <Switch>
               <Route exact path="/" component={Home} />
               <Redirect to="/" />
            </Switch>
            <Footer />
            <Nav />
         </div>
      </BrowserRouter>
    );
  }
}
