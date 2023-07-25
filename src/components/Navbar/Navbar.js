import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import './Navbar.css'

export default function Navbar() {
    const [click ,setClick] = useState(false)
    const clickHandler = () =>{
        setClick(!click)
    }


  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/Flights" className="nav-link">Choose Flights</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}
