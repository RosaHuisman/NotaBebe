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
      <div className="day__result">{recap.naps.map((nap) => (
        <div
          key={nap.id}
        >
          <p> {nap.start_time} - {nap.end_time} </p>
          <p> {nap.comment} </p>
        </div>
      ))}
      </div>
    ) : null }
    <p className="day__designation">Repas :</p>

    { recap.meals ? (
      <div className="day__result">{recap.meals.map((meal) => (
        <div
          key={meal.id}
        >
          <p> {meal.comment} </p>
        </div>

      ))}
      </div>
    ) : null }

    <p className="day__designation">Infos complémentaires :</p>
    <p className="day__result">{recap.extra_info}</p>

  </div>
);

// == Export
export default Day;
