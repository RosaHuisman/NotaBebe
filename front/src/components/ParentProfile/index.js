import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import Header from 'src/components/Header';
import HeaderParent from 'src/containers/HeaderParent';
import Loading from 'src/components/App/Loading';

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
  loading,
  changeInfos,
  children,
  loadParent,
  parentId,
  parent,
  checkIsLogged

}) => {

  console.log('parent', parent)
  /* useEffect(() => {
    //loadUsersParents();
    loadParent(parentId);

  }, []); */

  useEffect(() => {
    // ici on veut vérifier si l'utilisateur est déjà connecté
    // au 1e rendu du composant App
    checkIsLogged();
  }, []);

  const handleOnClickChangePasswordButton = (e) => {
    e.preventDefault();
    togglerChangePassword();
  };

  const handleOnClickChangeInfosButton = (e) => {
    e.preventDefault();
    openUserInfos();
  };


  if (loading) {
    return <Loading />;
  }
 

  return (
    <>
      <div>
        <HeaderParent />
      </div>

      <div className="parentprofile">

        {!isOpenInfos ? (
          <>
            <UserInfos
              user={parent[0]}
              openUserInfos={openUserInfos}
              //loadUsersParents={loadUsersParents}
              loadParent={loadParent}
              parentId={parentId}
              oading={loading}
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
            user={parent[0]}
            changeInfos={changeInfos}
            //loadUsersParents={loadUsersParents}
          />
        )}

        {/* {!isOpenPassword ? (
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
            user={parent[0]}
            />
        )} */}

        {/* <Children
          children={children}
          user={parent}
          /> */}
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
