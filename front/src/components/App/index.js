// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import composants /components
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
// import TEST from 'src/components/TEST';
import Contact from 'src/components/Contact';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
import Confirm from 'src/components/Confirm';

// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';

// == Composant
const App = ({ isLogged }) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Switch>
        {isLogged && (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/home">
              <TEST />
            </Route> */}
            {/* <Route>
              <Error />
            </Route> */}
          </>
        )}
        <Route exact path="/">
          <Login />
          <Contact />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/confirm">
          <Confirm />
        </Route>
        <Route exact path="/contact">
          <ContactDetails />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
