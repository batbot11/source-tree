import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  SingleObjectContainer,
  Marking,
  FirstLetter,
  InfoContainer,
  Heading,
  Label,
  Text,
  DownIcon,
  EditBox
} from "../singleObject/SingleObject";

//  Styled Consts
const SingleProjectContainer = styled(SingleObjectContainer)``;

const MiniObject = styled.div`
  height: 36px;
  box-shadow: 0px 3px 6px #00000029;
  color: #737a92;
  font-weight: bold;
  letter-spacing: 0.11px;
  display: flex;
  align-items: center;
  width: calc(85% - 32px);
  margin-left: 7.5%;
  position: relative;
`;

const MiniObjTitle = styled.span`
  margin-left: 5%;
`;

const MiniObjEditBox = styled(EditBox)`
  width: 32px;
  height: 26px;
  // top: 0;
  font-size: 12px;
`;

const ProjectBranch = ({ project, colorSelect, widthFactor }) => {
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

  return (
    <React.Fragment>
      <SingleProjectContainer
        widthFactor={widthFactor}
        left={getLeftMargin(Number(widthFactor) - 5)}
      >
        <Marking colorSelect={colorSelect} />
        <FirstLetter>{project.name.substr(0, 1)}</FirstLetter>
        <InfoContainer>
          <Heading>{project.name}</Heading>
          <Label>Description</Label>
          <Text>{project.description}</Text>
        </InfoContainer>
        {project.data && (
          <div style={{ marginTop: "15px", marginLeft: "2%" }}>
            <Label>Example Data</Label>
            <Text>{project.data}</Text>
          </div>
        )}
        {project.objects && (
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
      </SingleProjectContainer>

      {expandObj &&
        project.objects.map(object => (
          <MiniObject>
            <Marking colorSelect={colorSelect} />
            <MiniObjTitle>{object.name}</MiniObjTitle>
            <MiniObjEditBox>
              <i style={{ cursor: "pointer" }} className="fas fa-pencil-alt" />
            </MiniObjEditBox>
          </MiniObject>
        ))}
    </React.Fragment>
  );
};

ProjectBranch.propTypes = {
  project: PropTypes.object,
  colorSelect: PropTypes.string,
  widthFactor: PropTypes.number
};

export default ProjectBranch;
