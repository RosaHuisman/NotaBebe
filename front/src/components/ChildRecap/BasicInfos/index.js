// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import childHappyIcon from 'src/images/happy_icon.png';
import childMediumIcon from 'src/images/medium_icon.png';
import childGrumpyIcon from 'src/images/grumpy_icon.png';



// == Import : local
import './styles.scss';

// == Composant
const BasicInfos = ({
  recap,
  parent,
  child,
 
}) => {
  return(
  <div className="basicinfos">
      <div className="basicinfos__infos">
      {recap.mood === 'triste' ? 
            <img src={childGrumpyIcon} className="basicinfos__infos__icon" alt="Child Icon" />
          : recap.mood === 'moyen' ? 
          <img src={childMediumIcon} className="basicinfos__infos__icon" alt="Child Icon" /> 
          : recap.mood === 'heureux' ?
          <img src={childHappyIcon} className="basicinfos__infos__icon" alt="Child Icon" />
          : null  
        }
        
        
        <div className="basicinfos__infos__nameandmood">
          <p className="basicinfos__infos__firstname">{child.first_name}</p>
          <p className="basicinfos__infos__mood">{recap.mood}</p>
        </div>
      </div>
    </div>
  )
  

};


// == Export
export default BasicInfos;
