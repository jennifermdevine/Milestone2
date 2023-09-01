import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'
import In from './components/In'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/recipes'>In</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/'></Route>
            <Route path='/recipes' element={<In/>}></Route>
          </Routes >
        </main>
      </Router>
    </div>
  );
}

export default App;
