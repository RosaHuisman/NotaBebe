// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

// == Import : local
import './styles.scss';

// == Composant
const Children = () => {
  

  return (
    <div className="children">
        
    <h3> Mes enfants </h3>

      <div className="children__icons">
        <Link to="/profile/parent/:id/child/:id">
        <Icon 
          name="user" 
          size="huge" 
          className="children__icons__icon" />
        </Link> 
        
        <Link to="/profile/parent/:id/child/:id">
        <Icon 
          name="user" 
          size="huge" 
          className="children__icons__icon" />
        </Link> 
      </div>


    </div>

  );
};

Children.propTypes = {
  
};



// == Export
export default Children;



