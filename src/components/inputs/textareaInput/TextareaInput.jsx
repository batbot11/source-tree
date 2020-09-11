import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, StyledLabel } from "../textInput/TextInput";

const StyledInput = styled.textarea`
  border: 1px solid #dfe1e8;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
  color: #535353;
  letter-spacing: 0.1px;
  font-family: roboto, sans-serif;
  font-weight: 400;
`;

const TextareaInput = ({ label, placeholder, rows, marginTop }) => {
  return (
    <Container marginTop={marginTop} >
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} rows={rows || 5} />
    </Container>
  );
};

TextareaInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number
};

export default TextareaInput;
