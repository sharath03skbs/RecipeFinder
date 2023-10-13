
import axios from 'axios'
import { API_URL } from '../constants/constants'

export const getRecipes= async (searchedQuery)=>{           /*To get the data from database */
    try {
        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);  //axios is an async function
        return response.data;
        
    } catch (error) {
        console.log("Error on handling api",error.message);
        return error.response;
    }
}

/*The below Api call is to get the details of a single recipe */


export const getRecipe= async (searchedQuery)=>{           /*To get the data from database */
    try {
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);  //axios is an async function
        return response.data;
        
    } catch (error) {
        console.log("Error on handling api",error.message);
        return error.response;
    }
}