import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import {getRecipes} from '../services/api'

const Recipes = () => {
    const[searchedQuery,setSearchedQuery]=useState("pizza")       /*To store the value entered in input field */

    const[recipes,setRecipes] = useState([]);

    useEffect(() =>{
      getSearchedResult();  //When this is called the component gets inserted in dom
    } , [searchedQuery])





    const getSearchedResult= async ()=>{           /*This function is to store the result obtained from the api */

    let result = await getRecipes(searchedQuery);       
    /*Searchedquery is used because to get the data entered in the input field from the database */

    if(result && result.recipes){     /*checking if the result and the recipe exist i.e the api call is successful and getrecipes works fine*/

      setRecipes(result.recipes);
    }

    }
  return (
   
      <>
        <Search setSearchedQuery={setSearchedQuery}/>

        <RecipeList recipes = {recipes} searchedQuery={searchedQuery}/>
      
      </>
    
  )
}

export default Recipes
