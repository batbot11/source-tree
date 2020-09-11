import React, { useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import Validator from "validator";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import TextInput from "../../components/inputs/textInput/TextInput";
import {
  ToastHeading,
  ToastSub
} from "../../components/styledToast/StyledToast";
import ButtonLoader from "../../components/loaders/buttonLoader/ButtonLoader";

import { setAuthState } from "../../redux/actions/authActions";

export const FormContainer = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  width: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const TopStripe = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 4px;
  background-color: #0068c1;
`;

export const FormHeading = styled.div`
  font-size: 25px;
  color: #455a64;
  margin-left: 5%;
  margin-bottom: 20px;
`;

export const StyledSubmit = styled.button`
  background-color: #3ab539;
  height: 36px;
  border: 1px solid #3ab539;
  border-radius: 4px;
  color: #ffffff;
  width: 112px;
  margin-left: calc(50% - 56px);
  margin-top: 20px;
  cursor: pointer;
  display: block;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const SmallErrorText = styled.span`
  font-size: 12px;
  color: #912d2b;
  background-color: #faebd7;
  display: block;
  margin-left: ${props =>
    props.marginLeft !== undefined ? props.marginLeft : "5%"};
  margin-top: 5px;
  width: fit-content;
`;

const SmallInputContainer = styled.div`
  width: 45%;
  margin-left: 5%;
`;

const RegisterPage = ({ setAuthState }) => {
  const History = useHistory();

  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (name, value) => {
    const object = { ...newUserData, [name]: value };
    setNewUserData(object);
  };

  const validate = () => {
    const object = {};
    let isValidated = true;
    if (newUserData.firstName.length === 0)
      object.firstName = "First Name can't be empty!";

    if (newUserData.lastName.length === 0)
      object.lastName = "Last Name can't be empty!";

    if (!Validator.isEmail(newUserData.email))
      object.email = "Please enter a valid Email ID";

    if (newUserData.email.length === 0) object.email = "Email can't be empty!";

    if (newUserData.password.length === 0)
      object.password = "Password can't be blank!";

    if (newUserData.confirmPassword.length === 0)
      object.confirmPassword = "Please Re-type yout password!";

    if (newUserData.confirmPassword !== newUserData.password)
      object.confirmPassword = "Passwords don't match!";

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
        const signUpResponse = await Auth.signUp({
          username: newUserData.email,
          password: newUserData.password,
          attributes: {
            name: newUserData.firstName,
            family_name: newUserData.lastName
          }
        });
        if (signUpResponse && signUpResponse.user) {
          toast.success(
            <div>
              <ToastHeading>User Created Successfully!</ToastHeading>
              <ToastSub>
                Please confirm your Email ID before trying to login
              </ToastSub>
            </div>
          );
          setIsLoading(false);
          setAuthState({
            userConfirmed: signUpResponse.userConfirmed
          });
          History.push("/login");
        }
      }
    } catch (err) {
      setIsLoading(false);
      toast.error(
        <div>
          <ToastHeading>{err.name}!</ToastHeading>
          <ToastSub>{err.message}</ToastSub>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />

      <FormContainer>
        <TopStripe />
        <FormHeading>Register</FormHeading>
        <div style={{ display: "flex", width: "95%" }}>
          <SmallInputContainer>
            <TextInput
              onChange={value => onChange("firstName", value)}
              value={newUserData.firstName}
              label="First Name"
              placeholder="Enter First Name"
              marginLeft={0}
              width={100}
            />
            {errors.firstName && (
              <SmallErrorText marginLeft={0}>
                * {errors.firstName}
              </SmallErrorText>
            )}
          </SmallInputContainer>

          <SmallInputContainer>
            <TextInput
              onChange={value => onChange("lastName", value)}
              value={newUserData.lastName}
              label="Last Name"
              placeholder="Enter Last Name"
              marginLeft={0}
              width={100}
            />
            {errors.lastName && (
              <SmallErrorText marginLeft={0}>
                * {errors.lastName}
              </SmallErrorText>
            )}
          </SmallInputContainer>
        </div>
        <TextInput
          onChange={value => onChange("email", value)}
          value={newUserData.email}
          marginBottom={10}
          label="Email"
          placeholder="Enter Email"
          marginTop={20}
        />
        {errors.email && <SmallErrorText>* {errors.email}</SmallErrorText>}
        <TextInput
          label="Password"
          placeholder="Enter Password"
          onChange={value => onChange("password", value)}
          value={newUserData.password}
          type="password"
          marginTop={20}
        />
        {errors.password && (
          <SmallErrorText>* {errors.password}</SmallErrorText>
        )}

        <TextInput
          label="Confirm Password"
          placeholder="Enter Password"
          onChange={value => onChange("confirmPassword", value)}
          value={newUserData.confirmPassword}
          type="password"
          marginTop={20}
        />
        {errors.confirmPassword && (
          <SmallErrorText>* {errors.confirmPassword}</SmallErrorText>
        )}

        {!isLoading ? (
          <StyledSubmit onClick={() => onSubmit()}>Register</StyledSubmit>
        ) : (
          <StyledSubmit style={{ pointerEvents: "none" }}>
            <ButtonLoader />
          </StyledSubmit>
        )}
      </FormContainer>
    </div>
  );
};

RegisterPage.propTypes = {
  setAuthState: PropTypes.func
};

const mapState = state => ({});

export default connect(mapState, { setAuthState })(RegisterPage);
