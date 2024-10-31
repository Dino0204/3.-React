import {Routes,Route,Link} from 'react-router-dom';
import Calander from './pages/Calander';
import CalanderV2 from './pages/CalanderV2';
import Test from './pages/CssTest';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>V1</Link>
        {' | '}
        <Link to='/v2'>V2</Link>
        {' | '}
        <Link to='/test'>Test</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Calander/>}></Route>
        <Route path='/v2' element={<CalanderV2/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
