import React, { useState } from "react";
import Validator from "validator";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import {
  FormContainer,
  TopStripe,
  FormHeading,
  StyledSubmit,
  SmallErrorText
} from "../register/RegisterPage";
import TextInput from "../../components/inputs/textInput/TextInput";
import {
  ToastHeading,
  ToastSub
} from "../../components/styledToast/StyledToast";
import ButtonLoader from '../../components/loaders/buttonLoader/ButtonLoader';

import { setAuthState } from "../../redux/actions/authActions";

const StyledSpan = styled.span`
  font-size: 13px;
  color: #372c5a;
  margin-left: 5%;
  display: inline-block;
  margin-top: 10px;
`;

const ForgotSpan = styled(StyledSpan)`
  text-decoration: underline;
  cursor: pointer;
  float: right;
  margin-right: 5%;
`;

const LoginPage = ({ setAuthState }) => {
  const History = useHistory();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (name, value) => {
    const object = { ...userData, [name]: value };
    setUserData(object);
  };

  const validate = () => {
    const object = {};
    let isValidated = true;

    if (!Validator.isEmail(userData.email))
      object.email = "Please enter a valid Email ID";

    if (userData.email.length === 0) object.email = "Email can't be empty!";

    if (userData.password.length === 0)
      object.password = "Password can't be blank!";

    if (Object.keys(object).length > 0) isValidated = false;

    return [isValidated, object];
  };

  const onSubmit = async () => {
    try {
      const [isValidated, errorObj] = validate();
      if (!isValidated) setErrors(errorObj);
      else {
        setIsLoading(true);
        setErrors({});
        const user = await Auth.signIn(userData.email, userData.password);

        toast.success(
          <ToastHeading>User Logged in Successfully!</ToastHeading>
        );
        setIsLoading(false);
        setAuthState({
          user: user.attributes,
          userConfirmed: user.attributes.email_verified,
          isAuthenticated: true
        });

        History.push("/dashboard");
      }
    } catch (err) {
      toast.error(
        <div>
          <ToastHeading>{err.name}!</ToastHeading>
          <ToastSub>{err.message}</ToastSub>
        </div>
      );
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <FormContainer>
        <TopStripe />
        <FormHeading>Login</FormHeading>
        <TextInput
          label="Email"
          placeholder="Enter Email"
          value={userData.email}
          onChange={value => onChange("email", value)}
        />
        {errors.email && <SmallErrorText>* {errors.email}</SmallErrorText>}
        <TextInput
          label="Password"
          placeholder="Enter Password"
          value={userData.password}
          onChange={value => onChange("password", value)}
          type="password"
          marginTop={20}
        />
        {errors.password && (
          <SmallErrorText>* {errors.password}</SmallErrorText>
        )}

        <StyledSpan>
          New User ?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => History.push("/register")}
          >
            Register Here!
          </span>{" "}
        </StyledSpan>

        <ForgotSpan onClick={() => History.push("/forgot-password")}>
          Forgot Password ?
        </ForgotSpan>

        {!isLoading ? (
          <StyledSubmit onClick={() => onSubmit()}>Login</StyledSubmit>
        ) : (
          <StyledSubmit style={{ pointerEvents: "none" }}>
            <ButtonLoader />
          </StyledSubmit>
        )}
      </FormContainer>
    </div>
  );
};

LoginPage.propTypes = {
  setAuthState: PropTypes.func
};

const mapState = state => ({});

export default connect(mapState, { setAuthState })(LoginPage);
