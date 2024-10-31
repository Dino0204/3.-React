import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width:100vw;
  height:max-content;
  font-weight:700;
  color:white;

  & > div{
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

const Box1 = styled.div`
  width:100px;
  height:100px;
  background-color: rgba(1,1,1,1);
  
  position:relative;
  animation-name:move;
  animation-duration:5s;
  animation-iteration-count: infinite;
  
  @keyframes move {
    from{
      left: 0;
    }
    to{
      left:300px;
    }
  }
`;

const Box2 = styled.div`
  width:100px;
  height:100px;

  background-color:rgba(1,1,1,1);
  
  // 가상선택자 = : 가상선택자
  &:hover{
    background-color:rgba(1,1,1,0.3);
    border-radius:50%;
  }

  transition: all 2s;

`;

const Box3 = styled.div`
  width:100px;
  height:100px;
  background-color: rgba(1,1,1,1);

  &:hover{
    width:300px;
  }

  /* 하나의 범주를 가지는 property만 가능하다*/
  transition:width;
  transition-duration:2s;
`;

const ToggleBtn = styled.div`
  border: solid 1px black;
`;

const TestWeb = () => {
  return(
    <Div>
      <Box1>
        <p>Animation</p>
      </Box1>
      <Box2>
        <p>Transition</p>
      </Box2>
      <Box3>
        <p>Ts-Property</p>
      </Box3>
      <ToggleBtn/>
    </Div>
  );
}

export default TestWeb;