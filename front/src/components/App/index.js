// == Import npm
import React from 'react';
import Login from 'src/containers/Login';
import Contact from '../Contact';
import Footer from '../Footer';
import ContactDetails from '../ContactDetails';
import Header from '../Header';

import { Switch, Route } from 'react-router-dom';


// == Import
import './styles.scss';

// == Composant
const App = () => (
  <>
  <Header />
  <Switch>
    <Route path={'/'} exact>
      <Login />
      <Contact />
    </Route>
    <Route path={'/contact'} exact>
      <ContactDetails />
    </Route>
  </Switch>
  <Footer />
  </>
);

// == Export
export default App;
