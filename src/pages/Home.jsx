import React from 'react'
import Header from '../components/common/Header'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Header title='Find a Recipe' bgClass='bg-image'>  {/*Title and the class is passed as prop to Header.jsx*/}
       
    <Button 
    content='SEARCH RECIPES'
    color='primary' as={Link} to="/recipes"
    size='big'/>                   {/*Button is a child component of Header*/}

    </Header>
  )
}

export default Home
