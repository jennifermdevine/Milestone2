import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'
import In from './components/In';

import Nav from './components/Nav';
import AddFoodie from './components/AddFoodie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Nav />
            <Link to='/recipes'>In</Link>
        </header>
        <main>
          <Routes>
            <Route path='/'></Route>
            <Route path='/recipes' element={<In/>}></Route>
            {/* <Route path='/restaurants' element={<Out />}</Route> */}
          </Routes >
        </main>
      </Router>
    </div>
  );
}

export default App;

