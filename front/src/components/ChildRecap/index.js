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
    //console.log('useEffect de childprofile')
    loadChildren();
    loadRecaps();
    //loadComments();
  }, []);

  if (loading) {
    return <Loading />;
  } 


  //const data = useLocation();

  //console.log('recap dans childrecap', data.state.recap)
  //const recap = data.state.recap;
  //const parent = data.state.parent;
  //console.log(parent)
  console.log(child)
  console.log(recap)

  return ( 
  <>
    <header className="header">
      <Header />
    </header>

    <div className="childrecap">
    <p className="childrecap__date">{recap.date}</p>

    <BasicInfos recap={recap} child={child} parent={parent}/>
    <Day recap={recap}/>
    </div>

  </>)

 
};

ChildRecap.propTypes = {

};

ChildRecap.defaultProps = {
};

export default ChildRecap;
