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
				<h1 className='text-5xl flex justify-center items-center font-[600] py-4 px-2'>{coin.name && coin.name}</h1>
				<div className='flex relative p-4'>
					<h2 className='absolute top-0 left-0  px-4 py-2 font-[300] rounded-xl bg-gradient-to-r from-[#00CCF2] via-[#845FFA] to-[#F964D6]'>
						Rank: <span className='font-[700]'>#{coin.market_cap_rank && coin.market_cap_rank}</span>
					</h2>
					<div className='flex gap-2 items-center justify-center flex-1 p-4'>
						<div>
							<img src={coin.image && coin.image.small} alt='cryptocurrency-logo' />
						</div>
						<p className='text-2xl font-[500]'>{coin.name}</p>
						<p className='text-slate-500 font-[400]'>{coin.symbol && coin.symbol.toUpperCase()}/USD</p>
					</div>
					<div className='flex items-center justify-center flex-1 text-3xl font-[600] font-stock tracking-wider'>
						${coin.market_data && coin.market_data.current_price.usd}
						<span
							className={`${
								coin.market_data && coin.market_data.market_cap_change_percentage_24h < 0
									? 'text-red-500'
									: 'text-green-500'
							} px-2 text-xl`}>
							{coin.market_data && coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%
						</span>
					</div>
				</div>
				<div className='py-6 bg-[#1a2953] mt-10 px-4'>
					<h3 className='text-3xl px-2 py-4'>About {coin.name && coin.name}</h3>
					<p className='text-xl max-h-[60px] hover:max-h-[250px] duration-300 overflow-hidden relative '>
						{coin.description && coin.description.en}
						<span className='custom-box-shadow w-full'></span>
					</p>

					{/* <button className='absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%] px-4 py-2 bg-red-500'>
						Read more
					</button> */}
				</div>
			</div>
		</div>
	)
}

export default Coin
