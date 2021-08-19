import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles.scss';

function StaffProfile(props) {
  return (
    <div className="staff">
      <div className="staff__name">
        <h2> Dupont-Moretti Christine</h2>
      </div>
      <div className="staff__button">
      <div className="staff__button__comments">
        <Link className="comments__link" to='/contact' exact="true">
        <button type="button" className="button">Commentaires</button>
        </Link>
      </div>
     <div className="staff__button__recap">
        <Link className="recap__link" to='/contact' exact="true">
        <button type="button" className="button">Créer un récap</button>
        </Link>
      </div>
      </div>
      <div class="ui divider"></div>
      <div className="recaps">
       <p className="my__recap"><span><Icon name='file text' size='large'/></span>Mes Récaps</p>
      </div>
      <div className="recaps__filter">
        <div class="ui input"><input type="text" placeholder="Filtrer"/></div>
      </div>
      <div className="staff__recap">
        <div className="recap">
          <h1 className="recap__title">Timothey - 19/08/2021</h1>
          <span>Humeur</span>
          <p className="recap__sleep">Sieste: 13h30 à 15h00</p>
          <p className="recap__sleep__comment">long à s'endormir car il n'avait pas son doudou</p>
          <p className="recap__meal__comment">Repas: Moyen+, il n'a pas mangé les légumes, mais a bien mangé l'entrée, la viande et le laitage</p>
          <p className="recap__others__comments">Divers: Arrivée matinale difficile, mais timothey s'est détendu au fur et à mesure, il a participé aux diverses activités de la journée, peinture, jeux exterieurs et bricolage</p>
        </div>
        <div className="recap">
          <h1 className="recap__title">Timothey - 19/08/2021</h1>
          <span>Humeur</span>
          <p className="recap__sleep">Sieste: 13h30 à 15h00</p>
          <p className="recap__sleep__comment">long à s'endormir car il n'avait pas son doudou</p>
          <p className="recap__meal__comment">Repas: Moyen+, il n'a pas mangé les légumes, mais a bien mangé l'entrée, la viande et le laitage</p>
          <p className="recap__others__comments">Divers: Arrivée matinale difficile, mais timothey s'est détendu au fur et à mesure, il a participé aux diverses activités de la journée, peinture, jeux exterieurs et bricolage</p>
        </div>
        <div className="recap">
          <h1 className="recap__title">Timothey - 19/08/2021</h1>
          <span>Humeur</span>
          <p className="recap__sleep">Sieste: 13h30 à 15h00</p>
          <p className="recap__sleep__comment">long à s'endormir car il n'avait pas son doudou</p>
          <p className="recap__meal__comment">Repas: Moyen+, il n'a pas mangé les légumes, mais a bien mangé l'entrée, la viande et le laitage</p>
          <p className="recap__others__comments">Divers: Arrivée matinale difficile, mais timothey s'est détendu au fur et à mesure, il a participé aux diverses activités de la journée, peinture, jeux exterieurs et bricolage</p>
        </div>
        <div className="recap">
          <h1 className="recap__title">Timothey - 19/08/2021</h1>
          <span>Humeur</span>
          <p className="recap__sleep">Sieste: 13h30 à 15h00</p>
          <p className="recap__sleep__comment">long à s'endormir car il n'avait pas son doudou</p>
          <p className="recap__meal__comment">Repas: Moyen+, il n'a pas mangé les légumes, mais a bien mangé l'entrée, la viande et le laitage</p>
          <p className="recap__others__comments">Divers: Arrivée matinale difficile, mais timothey s'est détendu au fur et à mesure, il a participé aux diverses activités de la journée, peinture, jeux exterieurs et bricolage</p>
        </div>
      </div>
      </div>
  )
}

StaffProfile.propTypes = {

}

export default StaffProfile

