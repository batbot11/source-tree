import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GuestRoute = ({ component: Component, ...rest }) => {
  console.log('props inside guest route', { ...rest });
  return (
    <Route
      {...rest}
      render={props =>
        !props.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <React.Fragment>
            <Redirect to="/dashboard" />
          </React.Fragment>
        )
      }
    />
  );
};

// const mapState = state => ({
//   isLoggedIn: state.auth.isAuthenticated
// });

export default GuestRoute;
