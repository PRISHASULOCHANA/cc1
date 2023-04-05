
import './App.css'
import Home from './Home'
import NavBar from './NavBar';
import Singers from './Singers';
import Albums from './Albums';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
    </div>
  );
}

export default App;