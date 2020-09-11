import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import SingleObject from "../../components/singleObject/SingleObject";

export const TreeContainer = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  width: 70%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 23px;
  padding-bottom: 60px;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const TreeTitle = styled.span`
  color: #455a64;
  font-size: 25px;
  margin-left: 2.5%;
`;

export const AddButton = styled.button`
  background-color: #3ab539;
  border-radius: 4px;
  border: 1px solid #3ab539;
  color: #ffffff;
  width: 96px;
  height: 36px;
  float: right;
  margin-right: 2%;
  cursor: pointer;
`;

const TrashIcon = styled.i`
  float: right;
  margin-right: 5%;
  color: #737A92;
  margin-top: 10px;
  cursor: pointer;
`;

export const colorsArray = ["#FF9800", "#9591B2", "#00C11E", "#372C5A", "#24A7DF"];

const ObjectsListPage = props => {
  return (
    <div>
      <Navbar />
      <TreeContainer>
        <TreeTitle>Project 1: Object A</TreeTitle>
        <TrashIcon className="far fa-trash-alt" />
        <AddButton>Add Object</AddButton>
        {props.data &&
          props.data.map((object, index) => (
            <SingleObject
              colorSelect={colorsArray[index]}
              widthFactor={95}
              object={object}
            />
          ))}
      </TreeContainer>
    </div>
  );
};

const mapState = state => {
  return {
    data: state.data
  };
};

export default connect(mapState)(ObjectsListPage);
