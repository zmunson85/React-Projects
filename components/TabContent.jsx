import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const TabParagraph = styled.p`
  padding: 50px;
  font-size: 1rem;
  transition: all 1s ${fadeInAnimation};
  border: 0.75px solid rgb(230, 230, 230);
`;

export default TabParagraph;


/* In order to get this to work correctly I needed to install react animations. so it was npm install react-animations */