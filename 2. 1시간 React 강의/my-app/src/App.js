import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import Lee from "./pages/Home";
import About from "./pages/about"
import Counter from './pages/Counter';
import Input from './pages/input';
import Input2 from './pages/input2';
import UserList from './pages/List';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/counter">Counter</Link>
        {' | '}
        <Link to="/input">Input</Link>
        {' | '}
        <Link to="/input2">Input2</Link>
        {' | '}
        <Link to="/userList">UserList</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Lee/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/input' element={<Input/>}></Route>
        <Route path='/input2' element={<Input2/>}></Route>
        <Route path='/userList' element={<UserList/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
