import React from 'react';
import PropTypes from 'prop-types';

import ChildInfos from 'src/components/ChildProfile/ChildInfos';


import Header from 'src/components/Header';

import './styles.scss';


const ChildProfile = ({
  user,
  child,
  openUserInfos
}) => {
  
  console.log(child)
  
  return (
  <>
    <header className="header">
      <Header />
    </header>

    <div className="childprofile">
    coucou c'est moi
    <ChildInfos 
        {...user}
        openUserInfos={openUserInfos}
        
     />
    {/* {!isOpenInfos ? (
      <>
     <ChildInfos 
        {...user}
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
        {...user}
      />
    )} */}
    
  
    </div>

  </>
    )
};

ChildProfile.propTypes = {
  
};

ChildProfile.defaultProps = {
};

export default ChildProfile;
