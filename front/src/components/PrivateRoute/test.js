import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { tokenHeaderMiddleware as authHeader } from './src/store/middlewares/tokenHeaderMiddleware';


const PrivateRoute = (props) => {
  const { authHeader, role } = props;
  if (role === 'guest' && authHeader) return <Redirect to="/home" />;
  if (role === 'private' && !authHeader) return <Redirect to="/" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ authHeader }) => ({
  authHeader,
});

export default connect(mapStateToProps)(PrivateRoute);
