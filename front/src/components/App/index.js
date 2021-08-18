// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import composants custom
import Loading from 'src/components/App/Loading';
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

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
