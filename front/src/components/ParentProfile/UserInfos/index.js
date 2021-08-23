// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const UserInfos = ({
  user,

}) =>

// console.log(user)

  (
    <div className="userinfos">
      <div className="userinfos__infos">
        <table>
          <tbody>
            <tr>
              <td className="userinfos__infos__designation">Nom:</td>
              <td className="userinfos__infos__result">{user.last_name}</td>
            </tr>
            <tr>
              <td className="userinfos__infos__designation">Prénom:</td>
              <td className="userinfos__infos__result">{user.first_name}</td>
            </tr>
            <tr>
              <td className="userinfos__infos__designation__address">Adresse: </td>
              <td className="userinfos__infos__result">{user.address}</td>
            </tr>
            <tr>
              <td> </td>
              <td className="userinfos__infos__result">{user.postcode} {user.city}</td>
            </tr>
            <tr>
              <td className="userinfos__infos__designation__tel">Tél.: </td>
              <td className="userinfos__infos__result">{user.phone_number}</td>
            </tr>
            <tr>
              <td className="userinfos__infos__designation">Email: </td>
              <td className="userinfos__infos__result">{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  )
;

// UserInfos.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,

// };

// == Export
export default UserInfos;
