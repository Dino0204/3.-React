import React from "react"
import styled from 'styled-components';

const WrapElement = styled.div`
  display:flex;
  flex-direction:column;
  background-color:rgba(1,1,1,0.3);
  backdrop-filter:blur(10px);
  padding:20px;
  border-radius:25px;
  font-weight:500;

  & > .box{
    width:100px;
    height:100px;

    display:flex;
    justify-content:center;
    align-items:center;
    
    border-radius:15px;
    background-color:rgba(100,125,255,0.5);
  }

  & > label{
    // 상하좌우
    // 상하 좌우
    // 상 우좌 하
    // 상 우 하 좌
    margin: 0px 0px 20px 1rem;
  }
`;

const Box1 = styled.div`
  position:relative;
  animation-name:move;
  animation-duration:5s;
  animation-iteration-count: infinite;

  @keyframes move {
    from{
      left:0px;
    }
    to{
      left:300px;
    }
  }


`;

const Box2 = styled.div`
  transition-duration: 2s;
  &:hover{
    width:300px
  }

`;

const Loading = styled.div`
  display:flex;
  overflow:hidden;

  width:600px;
  height:50px;
  
  border-radius :25px;
  background-color:rgba(255,255,255,1);
  /* border:solid 1px white; */

  &:hover > div{
    width:inherit;
  } 

`;

const Load = styled.div`
  width:0;
  height:100%;
  
  background-color:rgba(100,150,255,1);
  background: linear-gradient(90deg, rgba(100,150,255,0.3) 0%, rgba(100,150,255,1) 100%);

  transition:width 2s;
  transition-timing-function:ease-in-out;

  
`;

const Home = () =>{
  return(
    <>
      <WrapElement>
        <label htmlFor="boxAnimation">Animation</label>
        <Box1 className='box' id="boxAnimation"><h4>Box1</h4></Box1>
      </WrapElement>
      
      <WrapElement>
        <label htmlFor="boxTransition">Transition</label>
        <Box2 className='box'id="boxTransition"><h4>Box2</h4></Box2>
      </WrapElement>
      
      <WrapElement>
        <label htmlFor="LoadingBar">LoadingBar</label>
        <Loading id="LoadingBar"><Load/></Loading>
      </WrapElement>
    </>
  )
}

export default Home;