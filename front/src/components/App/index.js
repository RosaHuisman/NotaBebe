// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import composants /components
import Footer from 'src/components/Footer';
import ContactDetails from 'src/components/ContactDetails';
import ForgotPassword from 'src/components/ForgotPassword';
// import AdminMobileHome from 'src/components/Admin';
import PrivateRoute from 'src/components/PrivateRoute';
import Error from 'src/components/Error';

// == Import composants /containers
// import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
// STAFF
import StaffProfile from 'src/containers/StaffProfile';
import ChildsList from 'src/containers/ChildsList';
import Recaps from 'src/components/Recaps';
import Comments from 'src/containers/Comments';
// import ReadComment from 'src/containers/ReadComment';
import CreateRecap from 'src/containers/CreateRecap';
// PARENT CHILD
import ParentProfile from 'src/containers/ParentProfile';
import ChildProfile from 'src/containers/ChildProfile';
import ChildRecap from 'src/containers/ChildRecap';
// ADMIN
import AddUserAdmin from 'src/containers/AddUserAdmin';
import EditUserAdmin from 'src/components/Admin/EditUserAdmin';
import Admin from 'src/containers/Admin';

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
        {/* <PrivateRoute exact path="/admin" component={AdminMobileHome} /> */}
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/admin/adduser" component={AddUserAdmin} />
        <PrivateRoute exact path="/admin/edituser" component={EditUserAdmin} />


        {/* Route Staff */}
        <PrivateRoute exact path="/profile/staff/:id" component={StaffProfile} />
        
        {/* <PrivateRoute exact path="/staff/:id/" component={StaffProfile} /> */}
        
        <PrivateRoute exact path="/profile/staff/:id/children" component={ChildsList} />
        <PrivateRoute exact path="/profile/staff/:id/recaps" component={Recaps} />
        <PrivateRoute exact path="/profile/staff/:id/comments" component={Comments} />

        {/*<PrivateRoute exact path="/staff/:id/comments" component={ReadComment} /> */}
        <PrivateRoute exact path="/profile/staff/children/:id/createrecap" component={CreateRecap} />

        {/* Route Parent Children */}
        <PrivateRoute exact path="/profile/parent/:id" component={ParentProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:id" component={ChildProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:child_id" component={ChildProfile} />
        <PrivateRoute exact path="/profile/parent/:id/child/:id/recap" component={ChildRecap} />

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
