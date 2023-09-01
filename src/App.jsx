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


// import './App.css';
// import Nav from './components/Nav'
// import UserCard from './components/UserCards'
// import AddFoodie from './components/AddFoodie'

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <br />
//       <UserCard />
//       <br />
//       <br />
//       <AddFoodie />
//     </div>
//   );
// }

// export default App;