import React from 'react'
import '../Style/Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </>
    )
}
