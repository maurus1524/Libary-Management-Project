import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import Startpg from './components/Startpg';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Startpg />} />
          <Route path='/home' element={<Home />} />
          <Route path="/home/create" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
