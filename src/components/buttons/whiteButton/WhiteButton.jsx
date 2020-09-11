import Styled from 'styled-components';

const WhiteButton = Styled.button`
width: 89px;
height: 40px;
border-radius: 4px;
background-color: #ffffff;
border: 1px solid #ffffff;
cursor: pointer;
&:active, &:focus {
  outline: none;
}
`;


export default WhiteButton;