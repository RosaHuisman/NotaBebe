// == Import npm
import React from 'react';
import Login from 'src/containers/Login';
import Contact from '../Contact';
import Footer from '../Footer';
import ContactDetails from '../ContactDetails';

import { Switch, Route } from 'react-router-dom';


import Header from '/src/components/Header'

// == Import
import './styles.scss';


// == Composant
const App = () => (
  <div className="app">

  <Header />

  <Switch>
    <Route path={'/'} exact>
      <Login />
      <Contact />
      <Footer />
    </Route>
    <Route path={'/contact'} exact>
    <ContactDetails />
    </Route>
  </Switch>

  </div>
);

// == Export
export default App;
