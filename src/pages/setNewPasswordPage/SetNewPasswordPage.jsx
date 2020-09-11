import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "aws-amplify";
import {
  ToastHeading,
  ToastSub
} from "../../components/styledToast/StyledToast";
import Navbar from "../../components/navbar/Navbar";
import {
  FormContainer,
  FormHeading,
  StyledSubmit,
  TopStripe,
  SmallErrorText
} from "../register/RegisterPage";
import TextInput from "../../components/inputs/textInput/TextInput";
import ButtonLoader from "../../components/loaders/buttonLoader/ButtonLoader";

const SetNewPasswordPage = () => {
  const History = useHistory();

  const [details, setDetails] = useState({
    code: "",
    newPassword: "",
    confirmNewPassword: "",
    email: ""
  });

  const [validationErrors, setValidationErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      onChange("email", History.location.state.email);
    } catch (err) {
      toast.error(
        <ToastHeading>
          Oops! Something went wrong. Please try again.
        </ToastHeading>
      );
      History.goBack();
    }
  }, [History]);

  const onChange = (name, value) => {
    const object = { ...details, [name]: value };
    setDetails(object);
  };

  const validate = () => {
    const object = {};
    let isValidated = true;

    if (details.code.length === 0)
      object.code = "Please enter code sent to your email";

    if (details.newPassword.length === 0)
      object.newPassword = "Please enter new Password!";

    if (details.confirmNewPassword !== details.newPassword)
      object.confirmNewPassword = "Passwords dont't match!";

    if (details.confirmNewPassword.length === 0)
      object.confirmNewPassword = "Please confirm your password!";

    if (Object.keys(object).length > 0) isValidated = false;
    return [isValidated, object];
  };

  const onSubmit = async () => {
    const [isValidated, errors] = validate();
    if (!isValidated) return setValidationErrors(errors);
    else {
      setValidationErrors({});
      setIsLoading(true);
    }
    try {
      const changedUserDetails = await Auth.forgotPasswordSubmit(
        details.email,
        details.code,
        details.newPassword
      );
      if (changedUserDetails === undefined) {
        setIsLoading(false);
        toast.success(
          <ToastHeading>Password changed successfully!</ToastHeading>
        );
        History.push("/login");
      }
    } catch (err) {
      setIsLoading(false);
      toast.error(
        <div>
          <ToastHeading>{err.name}</ToastHeading>
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
        <FormHeading>Set New Password</FormHeading>
        <TextInput
          label="Verification Code"
          placeholder="Enter Verification Code"
          value={details.code}
          onChange={value => onChange("code", value)}
          type="password"
        />
        {validationErrors.code && (
          <SmallErrorText>* {validationErrors.code}</SmallErrorText>
        )}
        <TextInput
          label="New Password"
          placeholder="Enter New Password"
          value={details.newPassword}
          onChange={value => onChange("newPassword", value)}
          type="password"
          marginTop={20}
        />
        {validationErrors.newPassword && (
          <SmallErrorText>* {validationErrors.newPassword}</SmallErrorText>
        )}
        <TextInput
          label="Re-Enter New Password"
          placeholder="Re-Enter New Password"
          value={details.confirmNewPassword}
          onChange={value => onChange("confirmNewPassword", value)}
          type="password"
          marginTop={20}
        />
        {validationErrors.confirmNewPassword && (
          <SmallErrorText>
            * {validationErrors.confirmNewPassword}
          </SmallErrorText>
        )}
        {!isLoading ? (
          <StyledSubmit onClick={() => onSubmit()}>Submit</StyledSubmit>
        ) : (
          <StyledSubmit style={{ pointerEvents: "noen" }}>
            <ButtonLoader />
          </StyledSubmit>
        )}
      </FormContainer>
    </div>
  );
};

export default SetNewPasswordPage;
