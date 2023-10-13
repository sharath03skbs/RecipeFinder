import './App.css';
import NavBar from './components/common/NavBar';
import Home from './pages/Home'
import Recipes from './pages/Recipes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails';

function App() {
  
  return (
    <div className="App">
     <Router>               {/*For inserting Routing of different pages; Like Home page, Root page, Recipe page */}
     <NavBar/>              {/*Linked Navbar page and it doesnt need any routing because it stays same in any page */}
      <Routes>              {/*Wrap all the elements in Routes that need Routing */}
        <Route path="/" element={<Home/>}/>       {/*Route specifies the endpoint; Like in this case for route '/'*/} 
                                                    {/*Home  should be displayed */}
        <Route path="/recipes" element={<Recipes/>}/>   {/*The path should match the to attribute of  Navbar.jsx  
      */}

        <Route path="/recipes/:recipeId"  element={<RecipeDetails/>} />  {/*Anything after the colon is consider as variable in the path ; It is known as param and can be extracted using useParams*/}

                          

      </Routes>
     </Router> 
    </div>
  );
}

export default App;
