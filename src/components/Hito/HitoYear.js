import React from 'react'
import styled, {css} from 'styled-components'

const Year = styled.p`
  position:absolute;
  text-align:left;
  color:white;
  z-index:1;
  left:${props => props.year.indexOf("-") === -1 ? "2%" : "-16%"};
  top:${props => props.direction === "up" ? "20.0%" : "70%"};
  ${props => props.direction === "up" && css`
    border-bottom:1px solid #00FFFF;
  `}

  ${props => props.direction === "down" && css`
    border-top:1px solid #00FFFF;
  `}

  transition:transform 0.3s ease-in-out 0.1s;
  transform:scaleX(0.0);
${props => props.hovered && css`
  transform:scaleX(1.0);
  `} 
 `
function HitoYear({year,hovered,direction}) {
  return <Year hovered={hovered} direction={direction} year={year} >{year}</Year> 
}

export default HitoYear 
