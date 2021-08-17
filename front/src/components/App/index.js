// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import composants custom
import Loading from './Loading';
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import ContactFooter from 'src/components/ContactFooter';

// == Composant
function App({ loading, isLogged }) {
  const location = useLocation();
  console.log('TOTO', isLogged);

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
          <div>BONJOUR JE SUIS CONNECTE</div>
        </Route>
      )}
        <Route exact path="/">
          <Login />
          <ContactFooter />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
