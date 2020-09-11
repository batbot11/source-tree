import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import SelectInput from "../../components/inputs/selectInput/SelectInput";
import SearchInput from "../../components/inputs/searchInput/SearchInput";
import Overlay from "../../components/overlay/Overlay";
import CreateProjectPopup from "../../components/popups/createProjectPopup/CreateProjectPopup";

//Declarative Constants

const sortOptions = [
  { label: "Date Modified (Ascending)", value: "modifyA" },
  { label: "Date Modified (Descending)", value: "modifyD" },
  { label: "Name (Ascending)", value: "nameA" },
  { label: "Name (Descending)", value: "nameD" },
  { label: "Created (Ascending)", value: "createA" },
  { label: "Created (Descending)", value: "createD" }
];

// Styles

const Heading = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.23px;
  color: #737a92;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const Steps = styled.div`
  display: flex;
  width: 60%;
  margin-left: 20%;
  position: relative;
  justify-content: space-between;
  &::after {
    content: "";
    position: absolute;
    height: 50%;
    border-bottom: 2px dashed #707070;
    width: 100%;
    z-index: -1;
  }
`;

const GreyCircle = styled.div`
  background-color: #f7f7f7;
  width: 10vw;
  height: 10vw;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 100%;
  color: #717171;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  position: relative;
  cursor: pointer;
`;

const GreyCircleText = styled.span`
  position: absolute;
  color: #737a92;
  font-size: 32px;
  letter-spacing: 0.23px;
  top: calc(100% + 20px);
  font-weight: 700;
`;

const ProjectsTable = styled.div`
  width: 90%;
  margin-left: 5%;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  margin-top: 100px;
  box-sizing: border-box;
  padding-left: 5%;
  padding-top: 20px;
  margin-bottom: 60px;
  padding-bottom: 20px;
`;

const TableTitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TableTitle = styled.span`
  color: #455a64;
  letter-spacing: 0px;
  font-size: 25px;
  font-weight: 400;
`;

const TableHeadings = styled.div`
  color: #8a96a0;
  position: relative;
  font-size: 12px;
  height: 50px;
`;

const NameSpan = styled.span`
  position: absolute;
`;

const DomainSpan = styled.span`
  position: absolute;
  left: 13%;
`;

const CreatedSpan = styled.span`
  position: absolute;
  left: 32%;
`;

const DescriptionSpan = styled.span`
  position: absolute;
  left: 50%;
`;

const TableRow = styled.div`
  position: relative;
  font-size: 14px;
  color: #737a92;
  height: 50px;
`;

const ViewButton = styled.button`
  width: 58px;
  height: 30px;
  background-color: #ff9800;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid #ff9800;
  color: #ffffff;
  position: absolute;
  left: 92%;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
`;

const PagingContainer = styled.div`
  text-align: center;
  width: 95%;
  color: #737a92;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
`;

const Dashboard = ({ projects }) => {
  const History = useHistory();

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
        <Navbar />

        <Heading>Let's Get Started</Heading>

        <Steps>
          <GreyCircle onClick={() => setShowNewProjectPopup(true)}>
            <i className="fal fa-plus" />
            <GreyCircleText>Choose</GreyCircleText>
          </GreyCircle>
          <GreyCircle>
            <i className="fal fa-pen" />
            <GreyCircleText>Design</GreyCircleText>
          </GreyCircle>
          <GreyCircle>
            <i className="far fa-eye" />
            <GreyCircleText>Monitor</GreyCircleText>
          </GreyCircle>
        </Steps>

        <ProjectsTable>
          <TableTitleContainer>
            <TableTitle>Projects</TableTitle>
            <SelectInput
              placeholder="--Sort By--"
              options={sortOptions}
              width={20}
              marginLeft={43}
              marginTop={-10}
            />
            <SearchInput width={25} marginLeft={1} />
          </TableTitleContainer>

          <TableHeadings>
            <NameSpan>Name</NameSpan>
            <DomainSpan>Domain</DomainSpan>
            <CreatedSpan>Created</CreatedSpan>
            <DescriptionSpan>Description</DescriptionSpan>
          </TableHeadings>

          {projects &&
            projects.map((project, index) => (
              <TableRow key={project.name} >
                <NameSpan>{project.name}</NameSpan>
                <DomainSpan>{project.domain}</DomainSpan>
                <CreatedSpan>
                  {moment(project.createdAt).format("dddd, MMM DD, YYYY")}
                </CreatedSpan>
                <DescriptionSpan>{project.description}</DescriptionSpan>
                <ViewButton onClick={() => History.push("/projects")}>
                  View
                </ViewButton>
              </TableRow>
            ))}

          <PagingContainer>
            <i
              style={{ color: "#C8CAD1", marginRight: "5px", cursor: 'pointer' }}
              className="fal fa-chevron-left"
            />{" "}
            1 of 2{" "}
            <i
              style={{ color: "#C8CaD1", marginLeft: "5px", cursor: 'pointer' }}
              className="fal fa-chevron-right"
            />
          </PagingContainer>
        </ProjectsTable>
      </div>
    </React.Fragment>
  );
};

const mapState = state => ({
  projects: state.projects
});

Dashboard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapState)(Dashboard);
