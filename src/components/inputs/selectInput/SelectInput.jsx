import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { StyledLabel, Container } from "../textInput/TextInput";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    height: "38px",
    border: "1px solid #D6D6D6",
    borderRadius: "5px",
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      outline: "none"
    },
    fontSize: '14px',
    color: '#535353',
  }),

  indicatorSeparator: () => null,

  menuList: (base, state) => ({
    ...base,
    fontSize: '14px',
  })
};


const SelectInput = ({
  label,
  options,
  placeholder,
  width,
  marginLeft,
  marginTop
}) => {
  return (
    <Container width={width} marginLeft={marginLeft} marginTop={marginTop}>
      <StyledLabel>{label}</StyledLabel>
      <Select
        options={options}
        placeholder={placeholder}
        styles={selectStyles}
      />
    </Container>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  width: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number
};

export default SelectInput;
