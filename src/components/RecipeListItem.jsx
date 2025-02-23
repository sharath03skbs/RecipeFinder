/*This component is to display single recipe item from the recipe list */

import { Link } from 'react-router-dom';
import {Button, Card} from 'semantic-ui-react'

const RecipeListItem = ({recipe}) =>{
    return( 

        <Card>
            <img src={recipe.image_url} alt ="thumbnail"  style={{height : 170}} />
            <Card.Content>
                <Card.Header content = {recipe.title}/>

                <Card.Description>
                    <h4>{recipe.publisher}</h4>

                </Card.Description>

            </Card.Content>

            <Card.Content>
                <Button
                    as={Link}
                    to = {`/recipes/${recipe.recipe_id}`}
                    content = "Details"
                    size="tiny"
                    color="yellow"
                />
                <Button
                    href = {recipe.source_url}
                    target = "_blank"
                    content = "Recipe URL"
                    size="tiny"
                    color="teal"
                    textcolor="white"
                />

            </Card.Content>

        </Card>

    )
}

export default RecipeListItem;