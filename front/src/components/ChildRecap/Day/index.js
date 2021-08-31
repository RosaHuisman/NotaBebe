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

      <p className="day__designation">Horaires de sieste :</p>
      <p className="day__result">{recap[0].start_time} - {recap[0].end_time}</p>

       {/* {recap[1] ? (
         <>
         <p className="day__designation">Repas :</p>
         <p className="day__result">{recap[1].rwnam_meal_comment}</p>
         </>
       ) : null} */}

      <p className="day__designation">Repas :</p>
      <p className="day__result">{recap[1].rwnam_meal_comment}</p>
            
      <p className="day__designation">Infos complémentaires :</p>
      <p className="day__result">{recap[0].extra_info}</p>

  </div>
  )
  

};

// == Export
export default Day;
