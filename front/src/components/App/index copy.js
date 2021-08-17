// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import composants custom
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import ContactFooter from 'src/components/ContactFooter';

// == Composant
function App({ isLogged }) {
  return (
    <>
      <Header />
      <Switch>
        {isLogged && (
          <Route exact path="/">
            <div>BONJOUR JE SUIS CONNECTE</div>
          </Route>
        )}
        {!isLogged && (
          <Route exact path="/">
            <Login />
            <ContactFooter />
          </Route>
        )}
      </Switch>


      {/* <Header />
      <Login />
      <ContactFooter /> */}
    </>
  );
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
