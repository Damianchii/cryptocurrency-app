import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
//nie bedzie widac znacznikow w description, tylko linki
import DOMPurify from 'dompurify'

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

	const howManyLetters = (description) => {
		// if (description.length > 200) {
		if (!description.length) {
			return description.slice(0, 200)
		} else {
			return description
		}
	}

	return (
		<div className='w-full h-full flex justify-center items-center font-main'>
			<div className='flex flex-col items-center w-full max-container p-4 border-[1.5px] border-purple-500 rounded-xl text-white'>
				<h1 className='text-5xl flex justify-center items-center font-[600] py-4 px-2'>{coin.name && coin.name}</h1>
				<div className='flex relative p-4  w-full border-b border-purple-500 '>
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
				<div className='grid grid-rows-2 grid-flow-col p-4  mt-6  w-[600px]'>
					<div className='grid place-content-center'>1h</div>
					{coin.market_data?.price_change_percentage_1h_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_1h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>24h</div>
					{coin.market_data?.price_change_percentage_24h_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_24h_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>7d</div>
					{coin.market_data?.price_change_percentage_7d_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_7d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>14d</div>

					{coin.market_data?.price_change_percentage_14d_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_14d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>30d</div>

					{coin.market_data?.price_change_percentage_30d_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_30d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>60d</div>
					{coin.market_data?.price_change_percentage_60d_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_60d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
					<div className='grid place-content-center '>200d</div>
					{coin.market_data?.price_change_percentage_200d_in_currency ? (
						<p
							className={`${
								coin.market_data.price_change_percentage_200d_in_currency.usd < 0 ? 'text-red-500' : 'text-green-500'
							} grid place-content-center`}>
							{coin.market_data.price_change_percentage_200d_in_currency.usd.toFixed(2)}%
						</p>
					) : null}
				</div>
				<div className='flex gap-10 justify-between p-4 mt-4 text-2xl'>
					<div className=''>
						Market value{' '}
						<span className='text-[#03C8FA]'>
							{' '}
							{coin.market_data?.market_cap ? coin.market_data.market_cap.usd.toLocaleString() : null}
						</span>{' '}
						$
					</div>
					<div>
						Portfolio users{' '}
						<span className='text-purple-500'>
							{coin.watchlist_portfolio_users ? coin.watchlist_portfolio_users.toLocaleString() : null}
						</span>
					</div>
				</div>
				<div className='flex gap-6 min-w-[200px] items-center justify-between  text-xl'>
					<div className='p-4 flex flex-col items-center border-2 border-purple-500 rounded-2xl gap-2'>
						{' '}
						<h1 className='p-2 relative after:block after:content[""] after:w-[80%] after: after:h-[1px] after:translate-x-[10%] after:bg-white  after:absolute after:bottom-[-1px]  after:left-0'>
							24h Low
						</h1>
						<p className='font-stock text-red-500'>{coin.market_data && coin.market_data.low_24h.usd} $</p>
					</div>
					<div className='p-4 flex flex-col items-center border-2 border-purple-500 rounded-2xl gap-2'>
						{' '}
						<h1 className='p-2 relative after:block after:content[""] after:w-[80%] after: after:h-[1px] after:translate-x-[10%] after:bg-white  after:absolute after:bottom-[-1px]  after:left-0'>
							24h High
						</h1>
						<p className='font-stock text-green-500'>{coin.market_data && coin.market_data.high_24h.usd} $</p>
					</div>
				</div>
				<div className='py-6  mt-10 px-4'>
					<h3 className='text-3xl px-2 py-4'>About {coin.name && coin.name}</h3>
					<p
						className={`text-xl duration-300 overflow-hidden relative `}
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(coin.description ? howManyLetters(coin.description.en) : ''),
						}}></p>
				</div>
			</div>
		</div>
	)
}

export default Coin
