

// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react'

import Store from './store';

/* import factory from './store';
const {store, persistor} = factory();
 */

// == Import : local
// Composants
import App from 'src/containers/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={Store.store}>
     <PersistGate loading={null} persistor={Store.persistor}>
      <Router>
        <App />
      </Router>
      </PersistGate>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
ReactDOM.render(rootReactElement, target);
