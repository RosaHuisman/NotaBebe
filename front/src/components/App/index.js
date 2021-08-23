// == Import npm
import React from 'react';
import Login from 'src/containers/Login';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import ContactDetails from 'src/components/ContactDetails';
import Header from 'src/components/Header';
import StaffProfile from 'src/components/StaffProfile';
import CreateRecap from 'src/components/CreateRecap';

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
    <Route path={'/staff'} exact>
      <StaffProfile />
    </Route>
    <Route path={'/create-recap'} exact>
      <CreateRecap />
    </Route>
  </Switch>
  <Footer />
  </>
);

// == Export
export default App;
