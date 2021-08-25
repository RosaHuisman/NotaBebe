import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const SearchBar = ({ searchValue, onApiChange }) => (
  <div className="manage">
    <div className="contentBar">
      <div className="contentBar__searchBar">
        <i className="contentBar__searchBar__icon search icon" />
        <input
          type="text"
          className="contentBar__searchBar__text"
          placeholder="Filter les accès"
          value={searchValue}
          onChange={onApiChange}
        />
      </div>
    </div>
    <div className="addAccess">
      <i className="plus circle icon" />
      <Link to="/admin">
        <div className="txtPlus">
          Créer un accès
        </div>
      </Link>
    </div>
  </div>
);

SearchBar.propTypes = {
  // searchValue: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
  onApiChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchValue: '',
};
export default SearchBar;
