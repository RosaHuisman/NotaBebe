// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import composants custom
import Header from 'src/components/Header';
import Login from 'src/components/Login';

// == Composant
const App = () => (
  <>
    <Header />
    <Login />
  </>
);

// == Export
export default App;
