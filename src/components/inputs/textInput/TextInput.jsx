import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Container = styled.div`
  width: ${props => (props.width  !== undefined ? `${props.width}%` : "90%")};
  margin-left: ${props => (props.marginLeft !== undefined ? `${props.marginLeft}%` : "5%")};
  margin-top: ${props => props.marginTop !== undefined && `${props.marginTop}px`};
  margin-bottom: ${props => props.marginBottom !== undefined && `${props.marginBottom}px`};
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #737a92;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid #dfe1e8;
  border-radius: 4px;
  height: 35px;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 10px;
  color: #535353;
`;

const TextInput = ({
  label,
  placeholder,
  marginTop,
  marginLeft,
  width,
  marginBottom,
  onChange,
  value,
  type
}) => {
  console.log('margin left', marginLeft);

  return (
    <Container
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onChange={e => onChange(e.target.value)}
        value={value}
        type="text"
        placeholder={placeholder}
        type={type || 'string'}
      />
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.number,
  width: PropTypes.number,
  marginBottom: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
