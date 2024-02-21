import React from 'react'
import logoImg from '../assets/crypto-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='w-full flex items-center justify-center'>
			<Link to='/'>
				<img src={logoImg} alt='logo' className='w-[300px]' />
			</Link>
		</nav>
	)
}

export default Navbar
