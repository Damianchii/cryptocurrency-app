import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logoImg from './assets/crypto-logo.png'

import Coins from './components/Coins'

function App() {
	const [coins, setCoins] = useState([])

	const url =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoins(response.data)
				console.log(response.data[0])
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<div className='bg-[#050810] h-[100vh]'>
			<nav className='w-full flex items-center justify-center'>
				<img src={logoImg} alt='logo' className='w-[300px]' />
			</nav>
			<section className='py-6'>
				<Coins coins={coins} />
			</section>
		</div>
	)
}

export default App
