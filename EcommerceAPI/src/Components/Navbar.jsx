import React from 'react'
import '../Style/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const { quantity } = useSelector((state) => state.cartItemReducer)

    return (
        <>
            <div className="myNavbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <h1>
                    {quantity}
                    {/* {quantity ? `(${quantity})` : ''} */}
                </h1>
            </div>
        </>
    )
}
