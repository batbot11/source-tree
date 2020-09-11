import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log('props inside protected route', { ...rest });
  return (
  <Route
    {...rest}
    render={props =>
      props.isAuthenticated ? (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)};

// const mapState = state => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

export default ProtectedRoute;
