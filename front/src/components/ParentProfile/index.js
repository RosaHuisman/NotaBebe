import React from 'react';
import PropTypes from 'prop-types';


import Field from 'src/components/Field';
import Children from 'src/components/ParentProfile/Children';
import ChangePasswordForm from 'src/components/ParentProfile/ChangePasswordForm';
import ChangeUserInfosForm from 'src/components/ParentProfile/ChangeUserInfosForm';
import UserInfos from 'src/components/ParentProfile/UserInfos';

import Header from 'src/components/Header';

import './styles.scss';


const ParentProfile = ({
  lastname, 
  firstname, 
  address, 
  postcode, 
  city, 
  email, 
  phone_number,
  oldpassword,
  newpassword,
  confirmpassword,
  openUserInfos,
  isOpenInfos,
  changeField,
  closeForm,
  handleChangeInfos,
  isOpenPassword,
  togglerChangePassword,
  handleChangePassword,

  
}) => {

  const handleOnClickChangePasswordButton = () => {
    togglerChangePassword();
  }

  return (
  <>
    <header className="header">
      <Header />
    </header>

    <div className="parentprofile">
    
    {!isOpenInfos ? (
      
     <UserInfos 
        openUserInfos={openUserInfos}
        lastname={lastname}
        firstname={firstname}
        address={address}
        postcode={postcode}
        city={city}
        email={email}
        phone_number={phone_number}
     />
    ) : (
      <ChangeUserInfosForm 
        changeField={changeField}
        closeForm={closeForm}
        handleChangeInfos={handleChangeInfos}
        lastname={lastname}
        firstname={firstname}
        address={address}
        postcode={postcode}
        city={city}
        email={email}
        phone_number={phone_number}
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
    ): (
    
      <ChangePasswordForm 
        changeField={changeField}
        closeForm={closeForm}
        handleChangePassword={handleChangePassword}
        oldpassword={oldpassword}
        newpassword={newpassword}
        confirmpassword={confirmpassword}
      />
    )}  
      <Children />
    </div>

  </>
    )
};

ParentProfile.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired
};


export default ParentProfile;
