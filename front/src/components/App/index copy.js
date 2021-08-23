// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useLocation, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// == Import
import './styles.scss';

// == Import composants /components
import Home from 'src/components/Home';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
import Confirm from 'src/components/Confirm';
import AdminMobileHome from 'src/components/Admin';

// TEST
import HomePage2 from 'src/components/HomePage2';
import HomePage3 from 'src/components/HomePage3';

// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';

// == Composant
const App = ({ logged }) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Switch>
        {logged && (
          <>
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/homepage2" component={HomePage2} />
            <Route exact path="/homepage3" component={HomePage3} />
          </>
        )}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/contact" component={ContactDetails} />
        <Route exact path="/admin" component={AdminMobileHome} />
        <Redirect from="login" to="/" />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default App;
