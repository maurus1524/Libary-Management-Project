import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import Startpg from './components/Startpg';
import BookFilter from './components/BookFilter';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Startpg />} />
          <Route path='/home' element={<Home />} />
          <Route path="/home/create" element={<Add />} />
          <Route path="/filter" element={<BookFilter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
