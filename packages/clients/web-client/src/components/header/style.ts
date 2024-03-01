import { Box, styled } from "@mui/material";

// ADDED
const topAppBarHeight = 64; 

const animation = {
    hide: `
      /* ADDED */
      transform: translate(0, -${topAppBarHeight}px);
      transition: transform 0.5s;
    `,
    show: `
      /* ADDED */
      transform: translate(0, 0);
      transition: transform 0.5s;
    `,
} 

export const HeaderStyled = styled(Box)`
  /* ADDED */
  height: ${topAppBarHeight}px;
  position: fixed;
  width: 100%; 
  z-index: 1000;
  ${props => !props?.defaultChecked && animation.hide} 
  ${props => props?.defaultChecked && animation.show} 
`;