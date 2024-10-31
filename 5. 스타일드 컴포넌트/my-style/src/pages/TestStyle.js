import React from "react";
import styled from 'styled-components';


const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Button = styled.button`
  width:300px;
  height:150px;

  font-size:20px;
  font-weight:700;

  border:none;
  border-radius:25px;

  background-color:rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);


  &:active{
    box-shadow: 10px 10px 10px rgba(1,1,1,0.6)
    ,-5px -5px 5px rgba(255,255,255,0.1);
  }

`;

const TestStyle = () => {
  return(
    <Div>
      <Button>Click me!</Button>
    </Div>
  )
}

export default TestStyle;