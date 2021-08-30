// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

// == Composant
const Day = ({
  recap,
 
}) => {
  console.log(recap)
  return (
    <div className="day">  

    {recap[0].naps.map((nap) => {
        return (
          < div key={nap.id} >
          <p  className="day__designation">Horaires de sieste :</p>
          <p className="day__result">{nap.start_time} - {nap.end_time}</p>
          <p className="day__result">{nap.comment} </p>
          </div>
        )
      })}

      {recap[0].meals.map((meal) => {
        return (
          < div key={meal.id} >
          <p className="day__designation">Repas :</p>
          <p className="day__result">{meal.comment}</p>
          </div>
        )
      })} 

      <p className="day__designation">Infos complémentaires :</p>
      <p className="day__result">{recap[0].extra_info}</p>

  </div>
  )
  

};

// == Export
export default Day;
