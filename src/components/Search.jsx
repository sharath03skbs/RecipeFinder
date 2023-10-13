import React, { useState } from 'react'
import { Grid,Form, Input } from 'semantic-ui-react'

const Search = ({setSearchedQuery}) => {

        const [value,setValue]=useState("")

        const onFormSubmit=()=>{            /*This function is to store the value in the useState value array */
            setSearchedQuery(value);
        }

  return (
    <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-header'>Search recipes with <span style={{color:'#FFC436'}}>Find A Recipe</span></h2>  
            <h4>Input the recipes seperated by comma</h4>
            <Form onSubmit={onFormSubmit}>          {/*Function to be called whenever the submit is clicked */}       
            <Input
                placeholder="Pizza,Tomato, etc.."
                icon={'search'}
                action={{color:'yellow'}}
                onChange={(e)=>setValue(e.target.value)}        /*Whenever the value is changed; the function is called */
                value={value}                           /*The value is assigned to the useState array*/
            />  
            </Form>  
        </Grid.Column>    
    </Grid>
  )
}

export default Search
