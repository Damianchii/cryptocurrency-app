import React from 'react'
import logoImg from '../assets/crypto-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<Link>
			<nav className='w-full flex items-center justify-center'>
				<img src={logoImg} alt='logo' className='w-[300px]' />
			</nav>
		</Link>
	)
}

export default Navbar
