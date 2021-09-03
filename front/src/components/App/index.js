// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import composants /components
import Footer from 'src/components/Footer';
import ContactDetails from 'src/components/ContactDetails';
import ContactAdmin from 'src/components/Admin/ContactAdmin';
import ForgotPassword from 'src/components/ForgotPassword';
import ErrorPage from 'src/components/Error';

// == Import composants /containers
// import Login from 'src/containers/Login';
import Home from 'src/containers/Home';
import PrivateRoute from 'src/containers/PrivateRoute';

// STAFF
import StaffProfile from 'src/containers/StaffProfile';
import ChildsList from 'src/containers/ChildsList';
import Recaps from 'src/containers/Recaps';
import Comments from 'src/containers/Comments';
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
  user,
  checkIsLogged,
  loadChildren,
  child,
  children,
}) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
    loadChildren();
  }, [location]);

  //console.log(children)

  //console.log(child)

  useEffect(() => {
    // state HomePage
    welcomePage();
    // ici on veut vérifier si l'utilisateur est déjà connecté
    // au 1e rendu du composant App
    checkIsLogged();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/contact" component={ContactDetails} />

        {/* Route Parent Children */}
        {user.roleId === 1 && (
        <>
          <PrivateRoute exact path="/profile/parent/:id" component={ParentProfile} />
          <PrivateRoute exact path="/profile/parent/:parent_id/child/:id" component={ChildProfile} />
          <PrivateRoute exact path="/profile/parent/:id/child/:id/recap" component={ChildRecap} />
        </>
        )}

        {/* Route Staff */}
        {user.roleId === 2 && (
        <>
          <PrivateRoute exact path="/profile/staff/:id" component={StaffProfile} />
          <PrivateRoute exact path="/profile/staff/:id/children" component={ChildsList} />
          <PrivateRoute exact path="/profile/staff/:id/recaps" component={Recaps} />
          <PrivateRoute exact path="/profile/staff/:id/comments" component={Comments} />
          {/* <PrivateRoute exact path="/staff/:id/comments" component={ReadComment} /> */}
          <PrivateRoute exact path="/profile/staff/children/:id/createrecap" component={CreateRecap} />
          {/* <PrivateRoute exact path="/profile/staff/childrensetSearchNewValue:id/createrecap" component={CreateRecap} /> */}
        </>
        )}

        {/* Route Admin */}
        {user.roleId === 3 && (
        <>
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/admin/adduser" component={AddUserAdmin} />
          <PrivateRoute exact path="/admin/edituser" component={EditUserAdmin} />
          <PrivateRoute exact path="/admin/contacts" component={ContactAdmin} />
        </>
        )}

        {/* <Route exact path="*" component={ErrorPage} /> */}

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
