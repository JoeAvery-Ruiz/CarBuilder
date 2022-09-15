import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavbarContainer = styled.nav`
  background-color: #09d6dd;
    padding: 5px;
    
    ul {
        display: flex;
        justify-content: space-evenly;
    }
    li {
        list-style: none;
    }
`



const Navbar = () => {
  return (
    
      <NavbarContainer>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/NewCar">New Car</Link></li>
        <li><Link to ="/signup">Signup</Link></li>
        <li><Link to ="/About">About</Link></li>
        <li><Link to ="/Warranty">Warranty</Link></li>
        <li><Link to ="/Logout">Logout</Link></li>
        <li><Link to ="/parts">New Parts</Link></li>
      </ul>
      </NavbarContainer>
   
  )
}

export default Navbar