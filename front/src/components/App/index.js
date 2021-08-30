// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import composants /components
import Footer from 'src/components/Footer';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
import AdminMobileHome from 'src/components/Admin';
import PrivateRoute from 'src/components/PrivateRoute';
import Error from 'src/components/Error';

// == Import composants /containers
// import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
// STAFF
import StaffProfile from 'src/components/StaffProfile';
import ChildsList from 'src/components/ChildsList';
import Recaps from 'src/components/Recaps';
import Comments from 'src/components/Comments';
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
  welcomePage,
  loading,
  // checkIsLogged,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  useEffect(() => {
    // state HomePage
    welcomePage();

    // check si un user est connecté (token valide) au 1er rendu du composant App
    // checkIsLogged();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Switch>
        {/* // à test ChildProfile */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/contact" component={ContactDetails} />
        {/* <Route path="*" component={Error} /> */}

        {/* Route Admin */}
        <PrivateRoute exact path="/admin" component={AdminMobileHome} />

        {/* Route Staff */}
        <Route exact path="/staff" component={StaffProfile} />
        
        {/* <PrivateRoute exact path="/staff/:id/" component={StaffProfile} /> */}
        
        <Route exact path="/staff/childs" component={ChildsList} />
        <Route exact path="/staff/recaps" component={Recaps} />
        <Route exact path="/staff/comments" component={Comments} />

        {/*<PrivateRoute exact path="/staff/:id/comments" component={ReadComment} /> */}
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
  );
};

App.propTypes = {
  loading: PropTypes.bool,
  welcomePage: PropTypes.func.isRequired,
  // checkIsLogged: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
