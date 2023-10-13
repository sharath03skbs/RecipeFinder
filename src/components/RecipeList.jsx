import React from 'react'
import {Container, Grid, GridColumn, Header, container} from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({recipes , searchedQuery}) => {
  /*This displays all the recipes that are retrieved from the api */
  return (
    <Container>
      <Header
        size="huge"
        content = {`RECIPE LIST FOR ${searchedQuery}`}
        textAlign="center"
      />
        <Grid columns={4} doubling>
          {
              recipes && recipes.map(recipe => (
                <GridColumn>
                  <RecipeListItem  recipe = {recipe}/>  {/*recipe is passed to recipelistitem ; recipe will be having all the data related to the searched query ex. pizza */}
                </GridColumn>
              ))
          }

        </Grid>

    </Container>
  )
}

export default RecipeList
