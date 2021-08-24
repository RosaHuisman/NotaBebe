import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Children from './Children';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeUserInfosForm from './ChangeUserInfosForm';
import UserInfos from './UserInfos';

import './styles.scss';

const ParentProfile = ({
  openUserInfos,
  isOpenInfos,
  closeForm,
  handleChangeInfos,
  isOpenPassword,
  togglerChangePassword,
  handleChangePassword,
  user,
  loadUsersParents,

}) => {
  // console.log(user)

  useEffect(() => {
    loadUsersParents();
  }, []);

  const handleOnClickChangePasswordButton = (e) => {
    e.preventDefault();
    togglerChangePassword();
  };

  const handleOnClickChangeInfosButton = (e) => {
    e.preventDefault();
    openUserInfos();
  };

  //console.log('user dans parentprofile', user)

  return (
    <>
      <header className="header">
        <Header />
      </header>

      <div className="parentprofile">

        {!isOpenInfos ? (
          <>
            <UserInfos
              user={user[0]}
              openUserInfos={openUserInfos}
            />
            <button
              type="button"
              className="parentprofile__button"
              onClick={handleOnClickChangeInfosButton}
            >
              Modifier mes informations
            </button>
          </>
        ) : (
          <ChangeUserInfosForm
            closeForm={closeForm}
            handleChangeInfos={handleChangeInfos}
            user={user[0]}
          />
        )}

        {!isOpenPassword ? (
          <button
            type="button"
            className="parentprofile__button"
            onClick={handleOnClickChangePasswordButton}
          >
            Changer mon mot de passe
          </button>
        ) : (

          <ChangePasswordForm
            closeForm={closeForm}
            handleChangePassword={handleChangePassword}
            user={user[0]}
          />
        )}

        <Children
        // children={myChildren}
          user={user}
        />
      </div>

    </>
  );
};

ParentProfile.propTypes = {
  openUserInfos: PropTypes.func.isRequired,
  isOpenInfos: PropTypes.bool,
  closeForm: PropTypes.func.isRequired,
  handleChangeInfos: PropTypes.func.isRequired,
  isOpenPassword: PropTypes.bool,
  togglerChangePassword: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,

  // children: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // ).isRequired,

//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,
};

ParentProfile.defaultProps = {
  isOpenInfos: false,
  isOpenPassword: false,
};

export default ParentProfile;
