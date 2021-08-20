// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './styles.scss';

// == Composant
const UserInfos = ({
  firstname,   
  phone_number,
  birthdate,
  allergy,
  children,
  user,
  child
}) => {

  return (
    <div className="childinfos">
      <div className="childinfos__infos">
        Votre enfant: {firstname}
      <table>
        <tbody>
            <tr>
                <td className="userinfos__infos__designation">Date de naissance</td>
                <td className="userinfos__infos__result">{birthdate}</td>
            </tr>
            <tr>
                <td className="userinfos__infos__designation">Numéro de téléphone du parent : </td>
                <td className="userinfos__infos__result">{phone_number}</td>
            </tr>
         
            <tr>
                <td className="userinfos__infos__designation">Allergies : </td>
                <td className="userinfos__infos__result">{allergy}</td>
            </tr>
        </tbody>
      </table>
      </div>

    </div>

  );
};

UserInfos.propTypes = {
  lastname: PropTypes.string.isRequired, 
  firstname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  phone_number: PropTypes.string.isRequired,
  
};



// == Export
export default UserInfos;



