// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

// == Import : local
import './styles.scss';

// == Composant
const Children = ({
  children,
  user
}) => {
  return (
    <div className="children">
        
    <h3 className="children__title"> Mes enfants</h3>

    {children && (
      <div className="children__infos">
        {children.map((child) => (
          <Link 
          key={child.id}
          to={`/profile/parent/${user.id}/child/${child.id}`}>
          <div className="children__infos__child">
            <Icon
              name="user" 
              size="huge" 
              className="children__infos__child__icon" 
              />
              <div className="children__infos__child__name">{child.firstname}</div>
              
            </div>
          </Link> 
        ))}
        </div>
    )}
    </div>

  );
};

Children.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  // user: PropTypes.objectOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // ),
  
};



// == Export
export default Children;



