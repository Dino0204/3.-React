import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account';

const Container = styled.div`
  display:grid;

  width:100vw;
  height:100vh;
  transition: all 2s;

  &:has(#bookStrap:checked){
    grid-template-columns:100px 1fr;
  }

  grid-template-rows: 50px 1fr;
  grid-template-columns:0px 1fr;
  grid-template-areas:
		'header header'
		'   a    main ';


`;

const Main = styled.main`
  display:grid;
  justify-content:center;
  align-items:center;
  
  color:whitesmoke;
`;  

const Header = styled.header`
  display: grid;
  align-items:center;
  grid-area:header; 
  grid-template:
  '   i      n      b  '
  '   .      .      c  '; 
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 50px 1fr;
  column-gap:20px;
  
  background-color:rgba(84, 111, 191,0.5);
  backdrop-filter: blur(10px);
`;

const Aside = styled.aside`
  grid-area:a;

  width: 100%;
  height:100%;
  
  background-color:rgba(174, 191, 242,0.5);
  backdrop-filter: blur(10px);
`;  

const Input = styled.input`
  appearance:none;
  grid-area:i;
  width:25px;
  height:25px;
  margin-left:10px;

  transition: background-color 1s;
  background-color:white; 

  &:checked{
    background-color:#D5F2EF;
  }
`;

const Nav = styled.nav`
  grid-area: n;

  display:flex;
  justify-content:center;
  align-items:center;

  & > a {
    text-decoration:none;
    margin: 0px 10px 0px 10px;
    color:whitesmoke;
  }

`;

function App() {
  return (
    <Container className="App">
      <Header>
        <Input type='checkBox' id='bookStrap'/>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </Nav>
        <Account/>
      </Header>
      <Aside id='sidebar'>
      </Aside>
      <Main>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/about' element={<About/>}/>
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
