// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

// == Composant
const Day = ({
  recap,

}) => (
  <div className="day">

    <p className="day__designation">Horaires de sieste(s) :</p>
    { recap.naps ? (
      <div>{recap.naps.map((nap) => (
          <p key={nap.id} className="day__result"> {nap.start_time} - {nap.end_time} : {nap.comment}</p>
      ))}
      </div>
    ) : null }
    <p className="day__designation">Repas :</p>

    { recap.meals ? (
      <div >{recap.meals.map((meal) => (
        <p key={meal.id} className="day__result"> {meal.comment} </p>
      ))}
      </div>
    ) : null }

    <p className="day__designation">Infos complémentaires :</p>
    <p className="day__result">{recap.extra_info}</p>

  </div>
);

// == Export
export default Day;
