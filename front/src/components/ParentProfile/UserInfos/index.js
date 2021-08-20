// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './styles.scss';

// == Composant
const UserInfos = ({
  lastname, 
  firstname, 
  address, 
  postcode, 
  city, 
  email, 
  phone_number,
  
}) => {

  return (
    <div className="userinfos">
      <div className="userinfos__infos">
      <table>
        <tbody>
            <tr>
                <td className="userinfos__infos__designation">Nom:</td>
                <td className="userinfos__infos__result">{lastname}</td>
            </tr>
            <tr>
                <td className="userinfos__infos__designation">Prénom:</td>
                <td className="userinfos__infos__result">{firstname}</td>
            </tr>
            <tr>
                <td className="userinfos__infos__designation__address">Adresse: </td>
                <td className="userinfos__infos__result">{address}</td>
            </tr>
            <tr>
                <td> </td>
                <td className="userinfos__infos__result">{postcode} {city}</td>
            </tr>
            <tr>
                <td className="userinfos__infos__designation__tel">Tél.: </td>
                <td className="userinfos__infos__result">{phone_number}</td>
            </tr>
            <tr>
                <td className="userinfos__infos__designation">Email: </td>
                <td className="userinfos__infos__result">{email}</td>
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



