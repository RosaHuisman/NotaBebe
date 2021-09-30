// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from 'src/components/App/Loading';


// == Import : local
import './styles.scss';

// == Composant
const UserInfos = ({ loadUsersParents, user, loadParent, parentId, loading }) => {
  /* useEffect(() => {
    loadParent(parentId);
  }, []) */
  
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="userinfos">
      <div className="userinfos__infos">
        <table>
          <tbody>
            <tr>
              <td className="userinfos__infos__designation">Nom:</td>
              <td className="userinfos__infos__result">{user.pwc_user_last_name}</td>
            </tr>
            <tr>
              <td className="userinfos__infos__designation">Prénom:</td>
              <td className="userinfos__infos__result">{user.pwc_user_first_name}</td>
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
  );
}

UserInfos.propTypes = {
  // user: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   last_name: PropTypes.string.isRequired,
  //   first_name: PropTypes.string.isRequired,
  //   address: PropTypes.string.isRequired,
  //   postcode: PropTypes.string.isRequired,
  //   city: PropTypes.string.isRequired,
  //   phone_number: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }).isRequired,

};

// == Export
export default UserInfos;
