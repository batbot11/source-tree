import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ObjectsListPage from './pages/objectsListPage/ObjectsListPage';
import Dashboard from './pages/dashboard/Dashboard';
import ProjectsListPage from './pages/projectsListPage/ProjectsListPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ForgotPasswordPage from './pages/forgotPasswordPage/ForgotPasswordPage';
import SetNewPasswordPage from './pages/setNewPasswordPage/SetNewPasswordPage';
import ProtectedRoute from './utils/routes/ProtectedRoute';
import GuestRoute from './utils/routes/GuestRoute';

import { setAuthState } from './redux/actions/authActions';

const App = ({ setAuthState, isAuthenticated }) => {

  useEffect(() => {
    getAuthDetailsOnRefresh();
  }, []);

  const getAuthDetailsOnRefresh = async () => {
    try {
      const session = await Auth.currentSession();
      const currentUser = await Auth.currentUserInfo();
      if (session && currentUser) {
        setAuthState({ isAuthenticated: true, user: currentUser.attributes, userConfirmed: currentUser.attributes.email_verified});
      }
    } catch(err) {
      Auth.signOut();
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/login" />
        <Route isAuthenticated={isAuthenticated} path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} isAuthenticated={isAuthenticated} />
        <Route path="/forgot-password" exact component={ForgotPasswordPage} isAuthenticated={isAuthenticated} />
        <Route path="/forgot-password-verify" exact component={SetNewPasswordPage} isAuthenticated={isAuthenticated} />
        <Route path="/dashboard" exact component={Dashboard} isAuthenticated={isAuthenticated} />
        <Route path="/objects" exact={true} component={ObjectsListPage} isAuthenticated={isAuthenticated} />
        <Route path="/projects" exact={true} component={ProjectsListPage} isAuthenticated={isAuthenticated} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  setAuthState: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

const mapState = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapState, { setAuthState })(App);