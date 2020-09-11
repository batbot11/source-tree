import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "../../components/navbar/Navbar";
import {
  TreeContainer,
  TreeTitle,
  AddButton
} from "../objectsListPage/ObjectsListPage";
import ProjectBranch from "../../components/projectBranch/ProjectBranch";
import Overlay from '../../components/overlay/Overlay';
import CreateProjectPopup from "../../components/popups/createProjectPopup/CreateProjectPopup";

//Declarative Consts

export const colorsArray = [
  "#FF9800",
  "#9591B2",
  "#00C11E",
  "#372C5A",
  "#24A7DF"
];

const ProjectsListPage = ({ projects }) => {
  const [showNewProjectPopup, setShowNewProjectPopup] = useState(false);

  return (
    <React.Fragment>

      {showNewProjectPopup && <Overlay />}

      {showNewProjectPopup && (
        <CreateProjectPopup
          onCloseClick={() => setShowNewProjectPopup(false)}
        />
      )}

      <div>
        <div>
          <Navbar />
          <TreeContainer>
            <TreeTitle>Projects</TreeTitle>
            <AddButton onClick={() => setShowNewProjectPopup(true)}>
              Add Object
            </AddButton>
            {projects &&
              projects.map((project, index) => (
                <ProjectBranch
                  project={project}
                  colorSelect={colorsArray[index]}
                  widthFactor={95}
                />
              ))}
          </TreeContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

ProjectsListPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
};

const mapState = state => ({
  projects: state.projects
});

export default connect(mapState)(ProjectsListPage);
