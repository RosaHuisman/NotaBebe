// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import ParentProfile from 'src/containers/ParentProfile'

// == Import
import './styles.scss';

// == Import composants custom
import Login from 'src/containers/Login';

// == Composant
const App = () => (
  <>
    <Switch>
        <Route path="/" exact>
          <ParentProfile />
        </Route>
        {/* <Route path="/profile/parent/:id">
          <ParentProfile />
        </Route> */}
        
        {/* <Route>
          <Error />
        </Route> */}
      </Switch>
  </>

);

// == Export
export default App;
