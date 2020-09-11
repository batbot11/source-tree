import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';
import WhiteButton from "../buttons/whiteButton/WhiteButton";
import { clearAuthState } from '../../redux/actions/authActions';

const StyledNavContainer = styled.div`
  height: 70px;
  background-color: #372c5a;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const StyledLogo = styled.div`
  width: 46px;
  height: 46px;
  background-color: #ffffff;
  border: 1px solid #707070;
  border-radius: 100%;
  margin-left: 2%;
  margin-right: 10px;
`;

const StyledTitle = styled.span`
  font-size: 20px;
  margin-right: 8%;
`;

const StyledNavOption = styled.span`
  margin-left: 12%;
  cursor: pointer;
  font-weight: 500;
`;

const StyledWhiteButton = styled(WhiteButton)`
  position: absolute;
  right: ${props => (props.right ? props.right : "2%")};
`;

const Navbar = ({ isAuthenticated, clearAuthState }) => {
  const History = useHistory();

  const logout = () => {
    Auth.signOut();
    clearAuthState();
    History.push('/login');
  };

  return (
    <StyledNavContainer>
      <StyledLogo />
      <StyledTitle>Logo</StyledTitle>
      {isAuthenticated && <StyledNavOption>Main</StyledNavOption>}{" "}
      {isAuthenticated && <StyledNavOption>Projects</StyledNavOption>}{" "}
      {isAuthenticated && <StyledNavOption>Monitor</StyledNavOption>}{" "}
      {isAuthenticated && <StyledNavOption>Resources</StyledNavOption>}{" "}
      {isAuthenticated ? (
        <StyledWhiteButton onClick={() => logout()} >Sign Out</StyledWhiteButton>
      ) : (
        <StyledWhiteButton onClick={() => History.push("/login")}>
          Login
        </StyledWhiteButton>
      )}
      {!isAuthenticated && (
        <StyledWhiteButton
          right="10%"
          onClick={() => History.push("/register")}
        >
          Sign Up
        </StyledWhiteButton>
      )}
    </StyledNavContainer>
  );
};

const mapState = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  setAuthState: PropTypes.func,
};

export default connect(mapState, { clearAuthState })(Navbar);
