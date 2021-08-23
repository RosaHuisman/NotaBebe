import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const HomePage = ({ loggedMessage }) => (
  <div className="welcome">
    <div className="welcome__title">
      <p>Bonjour {loggedMessage}, bienvenue dans votre espace</p>
    </div>
  </div>
);

HomePage.propTypes = {
  loggedMessage: PropTypes.string,
};

HomePage.defaultProps = {
  loggedMessage: 'Connecté',
};

export default HomePage;
