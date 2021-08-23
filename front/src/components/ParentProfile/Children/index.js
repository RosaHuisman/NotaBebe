// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

import ChildProfile from 'src/containers/ChildProfile'

// == Import : local
import './styles.scss';

// == Composant
const Children = ({
  children,
  //user,
  child

}) => {


  return (
    <div className="children">

      {'mon enfant', child}
        
    <h3 className="children__title"> Mes enfants</h3>
    <div className="text">Ici on affichera le ou les enfants du parent, pour l'instant cette information ne peut pas etre récupérée car les tables de jonction n'existent pas encore</div>

    {/* {children && (
      <div className="children__infos">
        {children.map((child) => (
          <Link 
          key={child.id}
          {...child}
          to={`/profile/parent/${user.id}/child/${child.id}`}
          //to={`/profile/child/${child.id}`}
          >
            
          <div className="children__infos__child">
            <Icon
              name="user" 
              size="huge" 
              className="children__infos__child__icon" 
              />
              <div className="children__infos__child__name">{child.firstname}</div>
              
            </div>
          </Link> 
        ))} */}
        {/* </div>
    )} */}
    </div>

  );
};

Children.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
    }),
  ),
  // user: PropTypes.shape({ 
  //   id: PropTypes.number.isRequired,
  // }).isRequired,
};



// == Export
export default Children;

// import ChildProfile from 'src/containers/ChildProfile';

// // == Import : local
// import './styles.scss';

// // == Composant
// const Children = ({
//   children,
//   // user,
//   child,

// }) => (
//   <div className="children">

//     {'mon enfant', child}

//     <h3 className="children__title"> Mes enfants</h3>
//     <div className="text">Ici on affichera le ou les enfants du parent, pour l'instant cette information ne peut pas etre récupérée car les tables de jonction n'existent pas encore</div>

//     {/* {children && (
//       <div className="children__infos">
//         {children.map((child) => (
//           <Link
//           key={child.id}
//           {...child}
//           to={`/profile/parent/${user.id}/child/${child.id}`}
//           //to={`/profile/child/${child.id}`}
//           >

//           <div className="children__infos__child">
//             <Icon
//               name="user"
//               size="huge"
//               className="children__infos__child__icon"
//               />
//               <div className="children__infos__child__name">{child.firstname}</div>

//             </div>
//           </Link>
//         ))} */}
//     {/* </div>
//     )} */}
//   </div>

// );

// Children.propTypes = {
//   children: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       firstname: PropTypes.string.isRequired,
//     }),
//   ),
//   // user: PropTypes.shape({
//   //   id: PropTypes.number.isRequired,
//   // }).isRequired,
// };

// // == Export
// export default Children;
