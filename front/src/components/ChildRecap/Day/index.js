// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
const Day = ({
 
}) => (
  <div className="day">  
    <p className="day__designation">Heure début de sieste :</p>
    <p className="day__result">12:30</p>
           
    <p className="day__designation">Heure fin de sieste :</p>
    <p className="day__result">15:10</p>
            
    <p className="day__designation">Repas :</p>
    <p className="day__result">Bien mangé: riz, saumon, epinards, yaourt, pain</p>
           
    <p className="day__designation">Infos complémentaires :</p>
    <p className="day__result">Il a joué au foot et s'est tombé, d'où sa petite bosse</p>

  </div>

);

// == Export
export default Day;
