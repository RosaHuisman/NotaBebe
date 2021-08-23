// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';


import ParentProfile from 'src/containers/ParentProfile'
import ChildProfile from 'src/containers/ChildProfile'

// == Import
import './styles.scss';

// == Import composants /components
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
// import TEST from 'src/components/TEST';
import Contact from 'src/components/Contact';
import ContactDetails from 'src/components/ContactDetails';

import Loading from './Loading';


// == Import composants /containers
import Login from 'src/containers/Login';
import Header from 'src/containers/Header';

// == Composant
const App = ({ 
  loading,
  isLogged,
  user,
  loadUsersParents,
  

 }) => {
  const location = useLocation();

  //console.log('load users parents dans index app: ', loadUsersParents())

  useEffect(() => {
    //console.log('load users parents dans useeffect: ', loadUsersParents())

    loadUsersParents();
    
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
             <Route 
              path="/profile/parent/:id" 
              component={ParentProfile}
              exact
              />

              <Route 
              path="/profile/parent/:id/child/:id" 
              component={ChildProfile}
              exact
              />
              
              
              {/* <Route 
                path="/profile/parent/:id/child/:id" 
                component={ChildProfile}
                exact
                /> */}
              
       

          </>
        )}
        <Route exact path="/">
          <Login />
          <Contact />
        </Route>
        <Route exact path="/contact">
          <ContactDetails />
        </Route>
        {/* <Route path="/profile/parent" exact>
          <ParentProfile />
        </Route> */}
        {/* <Route path="/profile/parent/:id">
          <ParentProfile />
        </Route> */}
        
        {/* <Route>
          <Error />
        </Route> */}
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
