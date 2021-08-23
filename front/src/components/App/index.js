// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

// == Import
import './styles.scss';

// == Import composants /components
import Home from 'src/components/Home';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import ContactDetails from 'src/components/ContactDetails';

import ForgotPassword from 'src/components/ForgotPassword';
import AdminMobileHome from 'src/components/Admin';

import PrivateRoute from 'src/components/PrivateRoute';

// TEST
import HomePage2 from 'src/components/HomePage2';
import HomePage3 from 'src/components/HomePage3';

// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';
import ParentProfile from 'src/containers/ParentProfile';
import ChildProfile from 'src/containers/ChildProfile';
import ChildRecap from 'src/containers/ChildRecap';

import Loading from './Loading';

const App = ({
  logged,
  // isLogged,
  roles,
  loading,
  user,
  loadUsersParents,
}) => {
  const location = useLocation();
  // const { logged, roles } = this.props;
  const dispatch = useDispatch();

  // console.log('load users parents dans index app: ', loadUsersParents())

  useEffect(() => {
    // console.log('load users parents dans useeffect: ', loadUsersParents())

    loadUsersParents();

    window.scroll(0, 0);
  }, [location]);

  if (loading) {
    return <Loading />;
  }

  return (
    // <>
    //   <Header />
    //   <Switch>
    //     {logged && (
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
    //     <Route exact path="/confirm" component={Confirm} />
    //     <Route exact path="/contact" component={ContactDetails} />
    //     <Route exact path="/admin" component={AdminMobileHome} />
    //     <Redirect from="login" to="/" />
    //     <Route component={Error} />
    //   </Switch>
    //   <Footer />
    // </>
    // <>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/login" component={Login} />
    //     <Route exact path="/forgot" component={ForgotPassword} />
    //     <Route exact path="/contact" component={ContactDetails} />
    //     <Route path="*" component={Error} />

    //     <PrivateRoute exact path="/" component={AdminMobileHome} />
    //     <PrivateRoute exact path="/admin" component={AdminMobileHome} />
    //     <PrivateRoute exact path="/profile/parent/:id" component={ParentProfile} />
    //     {/* // à test ChildProfile */}
    //     <PrivateRoute exact path="/profile/parent/:id/child/:id" component={ChildProfile} />
    //     <PrivateRoute exact path="/homepage" component={HomePage} />
    //     <PrivateRoute exact path="/homepage2" component={HomePage2} />
    //     <PrivateRoute exact path="/homepage3" component={HomePage3} />
    //   </Switch>
    //   <Footer />
    // </>
    <>
      
      <Switch>
       
        <Route exact path="/profile/parent/:id" component={ParentProfile} />
        {/* // à test ChildProfile */}
        <Route exact path="/profile/parent/:id/child/:id" component={ChildProfile} />
        <Route exact path="/profile/parent/1/child/1/recap" component={ChildRecap} />

        
      </Switch>
      <Footer />
    </>
  );
};

App.propTypes = {
  loading: PropTypes.bool,
  logged: PropTypes.bool.isRequired,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
