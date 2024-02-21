import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Coin() {
	const params = useParams()

	const [coin, setCoin] = useState({})

	const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoin(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<div className='w-full h-full flex justify-center items-center font-main'>
			<div className='flex flex-col w-full max-container p-4 border-[1.5px] border-purple-500 rounded-xl text-white'>
				<h1 className='text-4xl flex justify-center items-center font-[600] py-4 px-2'>{coin.name}</h1>
				<div className='flex relative p-4'>
					<h2 className='absolute top-0 left-0  px-4 py-2 font-[300] rounded-xl bg-gradient-to-r from-[#00CCF2] via-[#845FFA] to-[#F964D6]'>
						Rank: <span className='font-[700]'>#{coin.market_cap_rank}</span>
					</h2>
					<div className='flex gap-2 items-center justify-center flex-1 p-4'>
						<div>
							<img src={coin.image.small} alt='cryptocurrency-logo' />
						</div>
						<p className='text-2xl font-[500]'>{coin.name}</p>
						<p className='text-slate-500 font-[400]'>{coin.symbol.toUpperCase()}/USD</p>
					</div>
					<div className='flex items-center justify-center bg-blue-500 flex-1'>323213</div>
				</div>
			</div>
		</div>
	)
}

export default Coin
