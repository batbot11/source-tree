import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from '../textInput/TextInput';

const InputContainer = styled.div`
  width: 100%;
  height: 38px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  color: #737a92;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border: none;
  &:focus,
  &:active {
    outline: none;
  }
  height: 90%;
  font-size: 16px;
  padding-left: 5px;
  color: #535353;
  font-size: 14px;
`;

const SearchIcon = styled.i`
  font-size: 20px;
  margin-right: 5px;
`;

const SearchInput = ({ label, width, marginLeft, marginTop }) => {
  return (
    <Container width={width} marginLeft={marginLeft} marginTop={marginTop}>
      <label>{label}</label>
      <InputContainer>
        <StyledInput type="text" /> <SearchIcon className="fal fa-search" />
      </InputContainer>
    </Container>
  );
};

SearchInput.propTypes = {
  label: PropTypes.string,
  width: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number
};

export default SearchInput;
