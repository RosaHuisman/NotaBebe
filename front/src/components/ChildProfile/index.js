import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import { Link } from 'react-router-dom';
import ChildInfos from './ChildInfos';
import ChangeChildInfosForm from './ChangeChildInfosForm';
import Comment from './Comment';
import ChildRecap from 'src/components/ChildRecap';


import './styles.scss';

const ChildProfile = ({
  user,
  child,
  openUserInfos,
  isOpenInfos,
  closeForm,
  handleChangeInfos,
  submitComment,
  comment,
  commentSend,
  onChangeTextValue,

}) => {
  const handleOnClickChangeInfosButton = (e) => {
    e.preventDefault();
    openUserInfos();
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="childprofile">
        {/* Ici on affichera les infos de l'enfant
        lorsqu'on pourra récupérer les infos de la BDD */}

        {!isOpenInfos ? (
          <>
            <ChildInfos
              openUserInfos={openUserInfos}
            />

            <button
              type="button"
              className="childprofile__button"
              onClick={handleOnClickChangeInfosButton}
            >
              Modifier les informations
            </button>
          </>
        ) : (
          <>
            <div className="hello">Hello</div>
            <ChangeChildInfosForm
              closeForm={closeForm}
              handleChangeInfos={handleChangeInfos}
            />
          </>
        )}

        <Link
          // key={child.id}
          // {...child}
          // to={`/profile/parent/${user.id}/child/${child.id}/recap`}
          to="/profile/parent/1/child/1/recap"
          //component={ChildRecap}
        >
          <button
            type="button"
            className="childprofile__button childprofile__button__recap"
          >
            Récap du jour
          </button>
        </Link>

        <Comment
          submitComment={submitComment}
          commentSend={commentSend}
          onChangeTextValue={onChangeTextValue}
        />

      </div>

    </>
  );
};

ChildProfile.propTypes = {

};

ChildProfile.defaultProps = {
};

export default ChildProfile;
