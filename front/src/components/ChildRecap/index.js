import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Loading from 'src/components/App/Loading';

import Header from 'src/components/Header';
import BasicInfos from './BasicInfos';
import Day from './Day';


import './styles.scss';

const ChildRecap = ({
  loadRecaps,
  loadChildren,
  child,
  loading,
  recap,
  

}) => {

  useEffect(() => {
    loadChildren();
    loadRecaps();
  }, []);

  if (loading) {
    return <Loading />;
  } 


  return ( 
  <>
    <header className="header">
      <Header />
    </header>

    <div className="childrecap">
    <p className="childrecap__date">{recap.date}</p>

    <BasicInfos recap={recap[0]} child={child} parent={parent}/>
    <Day recap={recap[0]}/>
    </div>

  </>)

 
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
