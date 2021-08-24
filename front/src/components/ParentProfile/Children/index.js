// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import ChildProfile from 'src/containers/ChildProfile';

// == Import : local
import './styles.scss';

// == Composant
const Children = ({
  //children,
  user,
  //child,

}) => (
  <div className="children">

    <h3 className="children__title"> Mon enfant</h3>
    
      <div className="children__infos">
        
          <Link
          key={user[0].pwc_child_id}
          to={`/profile/parent/${user.id}/child/${user[0].pwc_child_id}`}
          //to={`/profile/child/${child.id}`}
          >

          <div className="children__infos__child">
            <Icon
              name="user"
              size="huge"
              className="children__infos__child__icon"
              />
              <div className="children__infos__child__name">{user[0].pwc_child_first_name}</div>

            </div>
          </Link>

          {user[1] ? (
              <Link
              key={user[1].pwc_child_id}
              to={`/profile/parent/${user.id}/child/${user[1].pwc_child_id}`}
              //to={`/profile/child/${child.id}`}
              >

              <div className="children__infos__child">
                <Icon
                  name="user"
                  size="huge"
                  className="children__infos__child__icon"
                  />
                  <div className="children__infos__child__name">{user[1].pwc_child_first_name}</div>

                </div>
              </Link>

          ) : ( 
            <div className="vide"></div>
          )}

         
         
        </div>
      </div>

);

Children.propTypes = {
  // children: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     firstname: PropTypes.string.isRequired,
  //   }),
  // ),
  // user: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  // }).isRequired,
};

// == Export
export default Children;
