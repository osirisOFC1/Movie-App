import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <ul>
         <li><a>Home</a></li>       
         <li><a>News</a></li>       
         <li style={{float:"right"}}><a className='active'>Movie Page</a></li>     
        </ul>
    </div>
  )
}

export default Navbar