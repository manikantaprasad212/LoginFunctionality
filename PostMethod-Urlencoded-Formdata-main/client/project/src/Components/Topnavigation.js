import React from 'react'
import { Link } from 'react-router-dom'

function Topnavigation() {
  return (
   <nav>
    <Link to="/dashboard">DashBoard</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/editprofile">EditProfile</Link>
    <Link to= "/leaves">Leaves</Link>
    <Link to="/">Logout</Link>
   </nav>
  )
}

export default Topnavigation