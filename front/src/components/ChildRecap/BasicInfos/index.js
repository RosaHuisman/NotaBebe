// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import childIcon from 'src/images/child_icon.png';


// == Import : local
import './styles.scss';

// == Composant
const BasicInfos = ({
 
}) => (
  <div className="basicinfos">
    <div className="basicinfos__infos">
      <img src={childIcon} className="basicinfos__infos__icon" alt="Child Icon" />
      <div className="basicinfos__infos__nameandmood">
        <p className="basicinfos__infos__firstname">Lucas</p>
        {/* ici faire un : si mood = heureux, on affiche icone heureux, si triste, icone triste... */}
        <p className="basicinfos__infos__mood">Heureux</p>
      </div>
    </div>
  </div>

);


// == Export
export default BasicInfos;
