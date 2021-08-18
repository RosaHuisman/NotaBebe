// == Import npm
import React from 'react';
import Login from 'src/containers/Login';
import Contact from '../Contact';
import Footer from '../Footer';
import ContactDetails from '../ContactDetails';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import composants custom
import Loading from 'src/components/App/Loading';
import Header from 'src/containers/Header';
import Error from 'src/components/Error';

  

App.propTypes = {
  loading: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
};

// == Composant
const App = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Switch>
        {isLogged && (
          <Route exact path="/">
            <Error />
          </Route>
        )}
        <Route exact path="/">
          <Login />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
 
};

// == Export
export default App;
