import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popup from '../popup/Popup';
import TextInput from '../../inputs/textInput/TextInput';
import SelectInput from '../../inputs/selectInput/SelectInput';
import TextareaInput from '../../inputs/textareaInput/TextareaInput';

const PopupTitle = styled.div`
  color: #455a64;
  font-size: 25px;
  text-align: center;
  margin-top: 26px;
`;

const PopupClose = styled.i`
  position: absolute;
  right: 13px;
  top: 8px;
  font-size: 26px;
  color: #717171;
  cursor: pointer;
`;

const PopupSubmitButton = styled.button`
  background-color: #4a9d0d;
  border-radius: 4px;
  width: 120px;
  height: 40px;
  font-weight: 500;
  letter-spacing: 0.07px;
  color: #ffffff;
  border: 1px solid #4a9d0d;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  margin-bottom: 40px;
`;


const projectTypeOptions = [
  { label: 'Long Term', value: 'long' },
  { label: 'Short Term', value: 'short' },
  { label: 'Mid Sized', value: 'mid' }
];

const CreateProjectPopup = ({ onCloseClick }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  useEffect(() => () => {
    document.body.style.overflow = 'auto';
  });

  return (
    <Popup>
    <PopupTitle>Let's Create a Project</PopupTitle>
    <PopupClose
      onClick={() => onCloseClick()}
      className="fal fa-times"
    />
    <div style={{ width: "60%", marginLeft: "20%" }}>
      <TextInput
        label="Project Name"
        placeholder="Enter Project Name"
        marginTop={20}
      />
      <SelectInput
        label="Project Type"
        placeholder="-- Select a Project Type --"
        marginTop={20}
        options={projectTypeOptions}
      />
      <TextareaInput
        label="Project Description"
        placeholder="Enter Project Description"
        marginTop={20}
      />
      <PopupSubmitButton>SAVE</PopupSubmitButton>
    </div>
  </Popup>

  );
};

CreateProjectPopup.propTypes = {
  onCloseClick: PropTypes.func,
};

export default CreateProjectPopup;