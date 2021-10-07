import React from 'react';
import PropTypes from 'prop-types';


import childHappyIcon from 'src/images/happy_icon.png';
import childMediumIcon from 'src/images/medium_icon.png';
import childGrumpyIcon from 'src/images/grumpy_icon.png';

import './styles.scss';
import BasicInfos from '../BasicInfos';
import Day from '../Day';

const OldRecaps = ({
    oldRecaps,
    child
}) => {

    console.log(oldRecaps)

  return (
      <>
    <h3 className="oldrecaps__title"> Les récaps des journées précédentes : </h3>

    <div className="oldrecaps">


      {oldRecaps.map((recap) => {
        return(
        <div className="oldrecap" key={recap.id}>
            <div className="oldrecap__header"> 
          <p className="oldrecap__header__date">{recap.date}</p>

          {recap.mood === 'Grincheux' || recap.mood === 'Grincheuse' ||  recap.mood === 'Malade' || recap.mood === 'Triste' || recap.mood === 'Enervée' || recap.mood === 'Enervé' || recap.mood === 'Fatigué' || recap.mood === 'Fatiguée'  ? 
            <img src={childGrumpyIcon} className="oldrecap__header__icon" alt="Child Icon" />
          : recap.mood === 'Ca va...' || recap.mood === 'Impatient' || recap.mood === 'Impatiente' ? 
          <img src={childMediumIcon} className="oldrecap__header__icon" alt="Child Icon" /> 
          : recap.mood === 'Joyeux' || recap.mood === 'Curieux' || recap.mood === 'Contente' || recap.mood === 'Très heureux' || recap.mood === 'Joyeuse' || recap.mood === 'Passionnée' || recap.mood === 'Heureuse' || recap.mood === 'Souriante' || recap.mood === 'Content' || recap.mood === 'Curieuse' || recap.mood === 'Heureux' || recap.mood === 'Passionné' || recap.mood === 'Souriant' ?
          <img src={childHappyIcon} className="oldrecap__header__icon" alt="Child Icon" />
          : null  
        }
          <p className="oldrecap__header__mood">{recap.mood}</p>
          </div>

          { recap.naps && recap.naps.length > 1 ? (
       <>
        <p className="day__designation">Les siestes :</p>
        <div>{recap.naps.map((nap) => (
        <p key={nap.id} className="day__result"> {napTime(nap.start_time)} - {napTime(nap.end_time)} : {nap.comment}</p>
      ))}
       </div>
       </>
    ) : recap.naps && recap.naps.length === 1 ? (
        <>
        <p className="day__designation">Horaires de la sieste :</p>
        <p key={recap.naps[0].id} className="day__result"> {recap.naps[0].start_time} - {recap.naps[0].end_time} : {recap.naps[0].comment}</p>
      </>
    
    ) : recap.naps === null ? (
      <p>{child.first_name} n'a pas fait de sieste aujourd'hui</p>
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

        )
      })}
      
    </div>
    <p>.</p>
    </>
  );
};

OldRecaps.propTypes = {

};

OldRecaps.defaultProps = {
};

export default OldRecaps;
