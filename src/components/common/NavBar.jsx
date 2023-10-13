import React from 'react'
import {Menu} from 'semantic-ui-react'
import {logo} from '../../constants/constants.js'   
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <Menu borderless fixed='top'>                   {/*Created a Navbar first with following content*/}
            <Menu.Item>
                <img src={logo} alt="Logo" style={{width:100, height:50}} />
            </Menu.Item>

            <Menu.Item name="Home" as={Link} to="/"/>
            
            {/*Another way of linking <Link to='/'>   <Menu.Item name='Home'/>  </Link>     Home link in the navbar*/}
           
            <Menu.Item name="Recipes" as={Link} to="/recipes"/>         {/*Linking Recipes page */}

        </Menu>
    </div>
  )
}

export default NavBar
