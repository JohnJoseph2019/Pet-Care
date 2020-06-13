import React from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

export default function NavBar(props) {
	return (
		<nav className='navHeader'>
			<NavLink className='linkHeader' to='/add-pet'>
				Add Pet
			</NavLink>
			<NavLink className='linkHeader' to='/pets'>
				Show Pets
			</NavLink>
			<NavLink className='linkHeader' to='#' onClick={props.handleLogout}>
				Log Out
			</NavLink>
		</nav>
	)
}
