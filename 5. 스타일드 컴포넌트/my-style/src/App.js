import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import styled from 'styled-components';

import TestStyle from './pages/TestStyle';
import TestWeb from './pages/TestWeb';

const Nav = styled.nav`
  text-align:center;
  margin-bottom:10px;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <Link to='/'>TestStyle</Link>
        {' | '}
        <Link to='/testweb'>TestWeb</Link>
      </Nav>
      <Routes>
        <Route path='/' element={<TestStyle/>}/>
        <Route path='/testweb' element={<TestWeb/>}/>
      </Routes>
    </div>
  );
}

export default App;
