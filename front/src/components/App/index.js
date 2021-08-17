// == Import npm
import React from 'react';
import Login from 'src/containers/Login';
import Contact from '../Contact';
import Footer from '../Footer';
import ContactDetails from '../ContactDetails';

import { Switch, Route } from 'react-router-dom';


// == Import
import './styles.css';

// == Composant
const App = () => (
  <>
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
  </>
);

// == Export
export default App;
