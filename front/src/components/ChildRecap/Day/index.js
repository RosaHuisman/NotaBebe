// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

// == Composant
const Day = ({
  recap,
 
}) => {
  console.log(recap)
  return (
    <div className="day">  

      <p className="day__designation">Horaires de sieste(s) :</p>
      <div className="day__result">{recap.naps.map((nap) => (
        //console.log(nap)
        <div
          key={nap.id}
        > 
          <p> {nap.start_time} - {nap.end_time} </p>
        </div>
      
      )
      )}
    </div>
    <p className="day__designation">Repas :</p>
    <div className="day__result">{recap.meals.map((meal) => (
        //console.log(meal)
        <div
          key={meal.id}
        > 
          <p> {meal.comment} </p>
        </div>
      
      )
      )}
    </div>

                  
      <p className="day__designation">Infos complémentaires :</p>
      <p className="day__result">{recap.extra_info}</p>

  </div>
  )
  

};

// == Export
export default Day;
