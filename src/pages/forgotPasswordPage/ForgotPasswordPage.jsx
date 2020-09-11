import React, { useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import {
  FormContainer,
  FormHeading,
  TopStripe,
  StyledSubmit
} from "../register/RegisterPage";
import {
  ToastHeading,
  ToastSub
} from "../../components/styledToast/StyledToast";
import TextInput from "../../components/inputs/textInput/TextInput";
import ButtonLoader from "../../components/loaders/buttonLoader/ButtonLoader";

const FormSubHeading = styled.div`
  font-size: 12px;
  color: #737a92;
  margin-left: 5%;
  margin-bottom: 20px;
`;

const StyledFormHeading = styled(FormHeading)`
  margin-bottom: 5px;
`;

const ForgotPassword = () => {
  const History = useHistory();

  const [accountEmail, setAccountEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    try {
      setIsLoading(true);
      const response = await Auth.forgotPassword(accountEmail);
      if (response) {
        toast.success(
          <div>
            <ToastHeading>Code Sent Successfully!</ToastHeading>
            <ToastSub>
              Please check your email and verify your account using the code
              sent.
            </ToastSub>
          </div>
        );
        setIsLoading(false);
        History.push("/forgot-password-verify", { email: accountEmail });
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
        <StyledFormHeading>Forgot Password ?</StyledFormHeading>
        <FormSubHeading>
          Please enter the email address associated with your account and we
          will send a password reset link to you.
        </FormSubHeading>
        <TextInput
          label="Your Email"
          placeholder="Enter Email"
          onChange={value => setAccountEmail(value)}
          value={accountEmail}
        />
        {!isLoading ? (
          <StyledSubmit onClick={() => submit()}>Send Link</StyledSubmit>
        ) : (
          <StyledSubmit style={{ pointerEvents: "none" }}>
            <ButtonLoader />{" "}
          </StyledSubmit>
        )}
      </FormContainer>
    </div>
  );
};

export default ForgotPassword;
