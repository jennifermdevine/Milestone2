import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'
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
            <Link className="a" to="/home">Home </Link>
            <br />
            <Link className="a" to="/addFoodie">Add Foodie</Link>
            <br />
            <Link className="a" to='/recipes'>In</Link>
            <br />
            <Link className="a" to="/out">Out</Link>
        </header>

        <main>
          <Routes>
            <Route path='/'></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/recipes' element={<In/>}></Route>
            <Route path="/addFoodie" element={<AddFoodie />}></Route>
            <Route path="/out" element={<Out/>}></Route>
            {/* <Route path='/restaurants' element={<Out />}</Route> */}
          </Routes >
        </main>
      </Router>
    </div>
  );
}

export default App;

