// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';


// == Import : local
import './styles.scss';

// == Composant
const Children = ({
  //children,
  user,
  //child,

}) => {
//console.log(user)
  return (
    <div className="children">

    <h3 className="children__title"> Mon enfant</h3>
    
      <div className="children__infos">
        {user.map((child) => {
          //console.log(child)
          return (
          
            <Link
            key={child.child_id}
            to={{
              pathname: `/profile/parent/${child.id}/child/${child.child_id}`,
              state: {
                child: child, 
              }
            }}            
            >
  
            <div className="children__infos__child">
              <Icon
                name="user"
                size="huge"
                className="children__infos__child__icon"
                />
  
                <div className="children__infos__child__name">{child.pwc_child_first_name}</div>
  
              </div>
            </Link> 

          )
          
        })
        };
          

          {/* {user[1] ? (
              <Link
              key={user[1].pwc_child_id}
              to={`/profile/parent/${user[1].id}/child/${user[1].pwc_child_id}`}
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
            <div className="empty"></div>
          )} */}

         
         
        </div>
      </div>
  )
 

};

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
