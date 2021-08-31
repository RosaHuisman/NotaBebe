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
 
}) => {
//console.log(parent)
  return(
  <div className="basicinfos">
      <div className="basicinfos__infos">
      {recap[0].mood === 'triste' ? 
            <img src={childGrumpyIcon} className="basicinfos__infos__icon" alt="Child Icon" />
          : recap[0].mood === 'moyen' ? 
          <img src={childMediumIcon} className="basicinfos__infos__icon" alt="Child Icon" /> 
          : recap[0].mood === 'heureux' ?
          <img src={childHappyIcon} className="basicinfos__infos__icon" alt="Child Icon" />
          : null  
        }
        
        
        <div className="basicinfos__infos__nameandmood">
          <p className="basicinfos__infos__firstname">{parent.parent.pwc_child_first_name}</p>
          <p className="basicinfos__infos__mood">{recap[0].mood}</p>
        </div>
      </div>
    </div>
  )
  

};


// == Export
export default BasicInfos;
