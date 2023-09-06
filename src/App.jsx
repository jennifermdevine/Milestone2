limport {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'
import In from './components/In';
import Nav from './components/Nav';
import AddFoodie from './components/AddFoodie';
import Home from './components/Home';
import Out from './components/Out';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <Nav />
          <br />
            <ul className="linkList">
            <li><Link className="a" to="/home">Home </Link></li>
            
            <li><Link className="a" to='/recipes'>In</Link></li>
            
            <li><Link className="a" to="/restaurants">Out</Link></li>
            </ul>
        </header>

        <main>
          <Routes>
            <Route path='/'></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/recipes' element={<In/>}></Route>
            <Route path="/addFoodie" element={<AddFoodie />}></Route>
            <Route path="/restaurants" element={<Out/>}></Route>
            {/* <Route path='/restaurants' element={<Out />}</Route> */}
          </Routes >
        </main>
      </Router>
    </div>
  );
}

export default App;

