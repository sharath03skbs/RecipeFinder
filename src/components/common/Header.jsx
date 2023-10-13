import React from 'react'

const Header = (props) => {
  return (
    <div className={props.bgClass}> 
    
    {/*bgImage is a class that is passed from Home.jsx the class can be used in App.css for styling */}
     {/*The Home page header along with the search button*/}

      <div className='text-content'>

        <h1 className='header-title'>{props.title}</h1>

            {props.children}            {/*The button component */}
      </div>
    </div>
  )
}

export default Header
