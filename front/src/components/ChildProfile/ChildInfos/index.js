// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const ChildInfos = ({
  parent,

}) => (
  <div className="childinfos">
    <p className="childinfos__firstname">{parent.pwc_child_first_name}</p>

    <p className="childinfos__designation">Date de naissance :</p>
    <p className="childinfos__result">{parent.birthdate}</p>

    <p className="childinfos__designation">Tél. du parent : </p>
    <p className="childinfos__result">{parent.phone_number}</p>

    <p className="childinfos__designation">Allergies : </p>
    <p className="childinfos__result">{parent.allergies}</p>

  </div>
);

ChildInfos.propTypes = {

};

// == Export
export default ChildInfos;
