import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  width: 50%;
  background-color: #ffffff;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  border-radius: 6px;
`;

export default Popup;
