import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import Loading from 'src/components/App/Loading';

const PrivateRoute = ({ loading, component: Component, ...rest }) => {
  const getToken = localStorage.getItem('MyToken');

  return (
    <Route
      {...rest}
      render={(props) => (getToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
};

// PrivateRoute.propTypes = {
//   loading: PropTypes.bool,
// };

// PrivateRoute.defaultProps = {
//   loading: false,
// };

export default PrivateRoute;
