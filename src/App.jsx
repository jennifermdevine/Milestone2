import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'
import {useState,useEffect} from 'react'
import In from './components/In';
import UpdateRecipe from './components/UpdateRecipe';
import Nav from './components/Nav';
import AddFoodie from './components/AddFoodie';
import Home from './components/Home';
import Out from './components/Out';
import './App.css';
import AddRecipe from './components/AddRecipe';
import InRecipe from './components/InRecipe';
import RecipesList from './components/RecipesList';

function App() {
  const [data,setData] = useState([])


  return (
    <div className="App">

      <Router>
        <header>
          <Nav />
          <br />
            <ul className="linkList">
            <li><Link className="a" to="/">Home </Link></li>
            
            <li><Link className="a" to='/recipes'>In</Link></li>
            
            <li><Link className="a" to="/restaurants">Out</Link></li>
            </ul>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='recipes' element={<In/>}></Route>
            <Route path="/recipes/list" element={<RecipesList/>}/>
            <Route path="/restaurants" element={<Out/>}></Route>
            <Route path="/recipes/addRecipe" element={<AddRecipe/>}></Route>
            <Route path="/recipes/addFoodie" element={<AddFoodie />}></Route>
            <Route path={`recipes/recipe/:id/Update/:id`} element={<UpdateRecipe />}></Route>
            <Route path={`recipes/list/recipe/:id/Update/:id`} element={<UpdateRecipe />}></Route>
            <Route path={`/recipes/recipe/:id`} element={<InRecipe />} ></Route>
            <Route path={`/recipes/list/recipe/:id`} element={<InRecipe />} ></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

