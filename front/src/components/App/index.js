// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useLocation, Redirect,
} from 'react-router-dom';
// import { connect, useDispatch } from 'react-redux';

// == Import composants /components
import Home from 'src/components/Home';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
import AdminMobileHome from 'src/components/Admin';

import PrivateRoute from 'src/components/PrivateRoute';
import HeaderAdmin from 'src/components/Admin/HeaderAdmin';
// TEST
import HomePage2 from 'src/components/HomePage2';
import HomePage3 from 'src/components/HomePage3';

// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import ParentProfile from 'src/containers/ParentProfile';
// import ChildProfile from 'src/containers/ChildProfile';

import Loading from './Loading';

// == Import
import './styles.scss';
// == Composant
const App = ({
  // logged,
  // loading,
  loading,
  loadUserLogged,
  logged,
  checkIsLogged,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  useEffect(() => {
    loadUserLogged();
    // ici on veut vérifier si l'utilisateur est déjà connecté
    // au 1e rendu du composant App
    checkIsLogged();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
  // <>
  //   <Header />
  //   <Switch>
  //     {!logged && (
  //       <>
  //         <Route exact path="/profile/parent/:id" component={ParentProfile} />
  //         <Route exact path="/homepage" component={HomePage} />
  //         <Route exact path="/homepage2" component={HomePage2} />
  //         <Route exact path="/homepage3" component={HomePage3} />
  //       </>
  //     )}
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/login" component={Login} />
  //     <Route exact path="/forgot" component={ForgotPassword} />
  //     <Route exact path="/contact" component={ContactDetails} />
  //     <Route exact path="/admin" component={AdminMobileHome} />
  //     <Route component={Error} />
  //   </Switch>
  //   <Footer />
  // </>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/contact" component={ContactDetails} />
        {/* <Route path="*" component={Error} /> */}

        <PrivateRoute exact path="/admin" component={AdminMobileHome} />
        {/* <PrivateRoute exact path="/profile/parent/:id" component={ParentProfile} /> */}
        <PrivateRoute exact path="/homepage2" component={HomePage2} />
        <PrivateRoute exact path="/homepage2" component={HomePage2} />
        <PrivateRoute exact path="/homepage3" component={HomePage3} />
      </Switch>
      <Footer />
    </>
  // <>
  //   <Header />
  //   <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/login" component={Login} />
  //     <Route exact path="/forgot" component={ForgotPassword} />
  //     <Route exact path="/contact" component={ContactDetails} />
  //     {logged ? (
  //       <>
  //         <Route exact path="/admin" component={AdminMobileHome} />
  //         <Route exact path="/profile/parent/:id" component={ParentProfile} />
  //         <Route exact path="/homepage" component={HomePage} />
  //         <Route exact path="/homepage2" component={HomePage2} />
  //         <Route exact path="/homepage3" component={HomePage3} />
  //       </>
  //     ) : (
  //       <Redirect to="/" />
  //     )}
  //     <Route component={Error} />
  //   </Switch>
  //   <Footer />
  // </>
  );
};

App.propTypes = {
  loading: PropTypes.bool,
  loadUserLogged: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
  logged: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
  logged: false,
};

// == Export
export default App;
