import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import Loading from 'src/components/App/Loading';


import { Link } from 'react-router-dom';

import './styles.scss';


const StaffProfile = ({ searchValue, setSearchValue, handleSubmit, loadUsersStaff, staff, loading }) => {

  useEffect(() => {
    loadUsersStaff();
  }, []);

  if (loading) {
    return <Loading />;
  }
   
// const [datas, setDatas] = useState([])

// useEffect(() => {
//   fetch
// }, [])

  return (
    <div className="staff">
      <div className="staff__name">
        <h2> Dupont-Moretti Christine </h2>
      </div>
      <div className="staff__button">
        <div className="staff__button__child">
          <Link className="childs__link" to={`/profile/staff/${staff.id}/children`} exact="true">
            <button type="button" className="button">Liste des enfants</button>
          </Link>
        </div>
        <div className="staff__button__recap">
          <Link className="recap__link" to={`/profile/staff/${staff.id}/recaps`} exact="true">
            <button type="button" className="button">Liste des récaps</button>
          </Link>
        </div>
        <div className="staff__button__comments">
          <Link className="comments__link" to={`/profile/staff/${staff.id}/comments`} exact="true">
            <button type="button" className="button">Les Commentaires</button>
          </Link>
        </div>
      </div>
      {/* <div className="ui divider"></div> */}
      
      {/* <div className="recaps__filter">
        <FilterRecaps
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onSearchSubmit={handleSubmit}
        />
      </div> */}
    </div>
    )}
   
StaffProfile.propTypes = {
  
}

export default StaffProfile

