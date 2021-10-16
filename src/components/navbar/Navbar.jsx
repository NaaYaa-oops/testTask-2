import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to={'/posts-list'}>
          Posts list
        </NavLink>
        <NavLink className="navbar-brand" to={'/post-create'}>
          Create post
        </NavLink>
      </div>
    </nav>
  )
}
