import React from 'react'
import {Link} from 'react-router-dom'
function Navbar () {
  return (
    <nav>
    <div>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Fact1">Fact 1</Link></li>
        <li><Link to="/Fact2">Fact 2</Link></li>
        <li><Link to="/Fact3">Fact 3</Link></li>
    </ul>


    </div>


    </nav>
    
  )
}

export default Navbar