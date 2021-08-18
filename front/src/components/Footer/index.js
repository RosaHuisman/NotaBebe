import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Footer(props) {
  return (
      <div className="footer"> 
      <a href="" className="mention-link">Mentions légales</a>
      <br />
      <span className="devteam">Développé par NotaBebe-Tardis</span>
      </div>
  )
}

Footer.propTypes = {

}

export default Footer
