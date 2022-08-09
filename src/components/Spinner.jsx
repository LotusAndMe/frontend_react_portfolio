/** @format */
import React from 'react'

import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg);
}
`;

const Spinnercircle = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

const spinstylemain = {display:'grid',justifyItems:'center',alignContent:'center', width:'100vw',height:'100vh'}

const Spinner = ({ position }) => {
  if(position==='app'){
  return(
    <div style={spinstylemain}>
      <Spinnercircle/>
    </div >
    )
  }
  else return <Spinnercircle/>
}

export default Spinner ;

// Position feature to point which component using and which style to apply