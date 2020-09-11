import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import './hello.css';

export const SingleObjectContainer = styled.div`
  height: 89px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
  width: ${props => {
    return `${Number(props.widthFactor) - 5}%`;
  }};
  margin-left: ${props => {
    return `${props.left}%`;
  }};
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
`;

export const Marking = styled.div`
  width: 4px;
  height: 100%;
  // background-color: #ff9800;
  background-color: ${props => {
    console.log("color select inside styled", props.colorSelect);
    return props.colorSelect;
  }};
`;

export const FirstLetter = styled.div`
  width: 52px;
  height: 50px;
  border-radius: 100%;
  background-color: #e3e3e3;
  border: 1px solid #e3e3e3;
  margin-left: 5%;
  color: #767676;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  margin-left: 5%;
  height: 100%;
  padding-top: 10px;
  // display: flex;
`;

export const Heading = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #737a92;
`;

export const Label = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #3b3f48;
  margin-top: 6px;
  margin-bottom: 5px;
`;

export const Text = styled.div`
  font-size: 12px;
  letter-spacing: 0.1px;
  color: #737a92;
`;

export const DownIcon = styled.i`
@keyframes animate {
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
  color: #c8cad1;
  position: absolute;
  right: 5%;
  top: 35px;
  cursor: pointer;
  transform: ${props => props.expandObj ? 'rotate(90deg)' : 'rotate(0deg)'};
  transition: all .5s ease;
`;

export const EditBox = styled.div`
  box-shadow: 0px 3px 3px #00000029;
  border-radius: 0px 4px 4px 0px;
  width: 35px;
  height: 64px;
  position: absolute;
  left: 100%;
  background-color: #ffffff;
  display: flex;
  flex-flow: column;
  color: #c8cad1;
  align-items: center;
  justify-content: space-evenly;
`;

const SingleObject = ({ object, widthFactor, colorSelect }) => {
  const [expandObj, setExpandObj] = useState(false);

  const toggleExpand = () => {
    if (expandObj) return setExpandObj(false);
    else return setExpandObj(true);
  };

  const getLeftMargin = factor => {
    const difference = 90 - factor;
    if (difference === 0) return 2.5;
    else {
      return difference + 2.5;
    }
  };

  console.log("inside single object", object, widthFactor);

  return (
    <React.Fragment>
      <SingleObjectContainer
        widthFactor={widthFactor}
        left={getLeftMargin(Number(widthFactor) - 5)}
      >
        <Marking colorSelect={colorSelect} />
        <FirstLetter>{object.name.substr(0, 1)}</FirstLetter>
        <InfoContainer>
          <Heading>{object.name}</Heading>
          <Label>Description</Label>
          <Text>{object.description}</Text>
        </InfoContainer>
        {object.data && (
          <div style={{ marginTop: "15px", marginLeft: "2%" }}>
            <Label>Example Data</Label>
            <Text>{object.data}</Text>
          </div>
        )}
        {object.subData && (
          <DownIcon
            onClick={() => toggleExpand()}
            className="fas fa-chevron-right hello"
            expandObj={expandObj}
          />
        )}
        <EditBox>
          <i style={{ cursor: "pointer" }} className="fas fa-pencil-alt" />
          <i style={{ cursor: "pointer" }} className="fas fa-times" />
        </EditBox>
      </SingleObjectContainer>

      {expandObj &&
        object.subData.map(subObj => (
          <SingleObject
            colorSelect={colorSelect}
            widthFactor={widthFactor - 5}
            object={subObj}
          />
        ))}
    </React.Fragment>
  );
};

SingleObject.propTypes = {
  object: PropTypes.object,
  widthFactor: PropTypes.number,
  colorSelect: PropTypes.string
};

export default SingleObject;
