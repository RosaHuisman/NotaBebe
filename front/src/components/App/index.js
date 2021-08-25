// == Import npm
import React, { useEffect } from 'react';
import {
  Route, Switch, useLocation, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from 'src/components/PrivateRoute';

// == Import composants /components
import Footer from 'src/components/Footer';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
import AdminMobileHome from 'src/components/Admin';
import Error from 'src/components/Error';

// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
// STAFF
// import StaffProfile from 'src/containers/StaffProfile';
// import ReadComment from 'src/containers/ReadComment';
import CreateRecap from 'src/containers/CreateRecap';
// PARENT CHILD
import ParentProfile from 'src/containers/ParentProfile';
import ChildProfile from 'src/containers/ChildProfile';
import ChildRecap from 'src/containers/ChildRecap';
// TEST
import HomePage1 from 'src/components/HomePage';
import HomePage2 from 'src/components/HomePage2';
import HomePage3 from 'src/components/HomePage3';

import Loading from './Loading';

// == Import
import './styles.scss';
// == Composant
const App = ({
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

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Header />
      <Switch>
        {/* // à test ChildProfile */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/contact" component={ContactDetails} />
        {/* <Route path="*" component={Error} /> */}

        {/* Route Admin */}
        <PrivateRoute exact path="/admin" component={AdminMobileHome} />

        {/* Route Staff */}
        {/* <PrivateRoute exact path="/staff/:id/" component={StaffProfile} />
        <PrivateRoute exact path="/staff/:id/comments" component={ReadComment} /> */}
        <PrivateRoute exact path="/staff/:id/createrecap" component={CreateRecap} />

        {/* Route Parent Children */}
        <PrivateRoute exact path="/profile/parent/:id" component={ParentProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:id" component={ChildProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:child_id" component={ChildProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:id/recap" component={ChildRecap} />

        {/* Route de test blabla */}
        <PrivateRoute exact path="/homepage1" component={HomePage1} />
        <PrivateRoute exact path="/homepage2" component={HomePage2} />
        <PrivateRoute exact path="/homepage3" component={HomePage3} />
      </Switch>
      <Footer />
    </>
  //   <>
  //   <Switch>

  //     {/* // à test ChildProfile */}

  //     {/* <Route exact path="/" component={Home} /> */}
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/forgot" component={ForgotPassword} />
  //     <Route exact path="/contact" component={ContactDetails} />
  //     {/* <Route path="*" component={Error} /> */}

  //     {/* Route Admin */}
  //     {/* <PrivateRoute exact path="/admin" component={AdminMobileHome} /> */}

  //     {/* Route Staff */}
  //     {/* <PrivateRoute exact path="/staff/:id/" component={StaffProfile} />
  //     <PrivateRoute exact path="/staff/:id/comments" component={ReadComment} /> */}
  //     <Route exact path="/staff/:id/createrecap" component={CreateRecap} />

  //     {/* Route Parent Children */}
  //     <Route exact path="/profile/parent/:id" component={ParentProfile} />
  //     <Route exact path="/profile/parent/:id/child/:id" component={ChildProfile} />
  //     <Route exact path="/profile/parent/:id/child/:child_id" component={ChildProfile} />
  //     <Route exact path="/profile/parent/:id/child/:id/recap" component={ChildRecap} />

  //     {/* Route de test blabla */}
  //     <Route exact path="/homepage1" component={HomePage1} />
  //     <Route exact path="/homepage2" component={HomePage2} />
  //     <Route exact path="/homepage3" component={HomePage3} />
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
