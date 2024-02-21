import React from 'react'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io'

const CoinItem = (props) => {
	return (
		<div className='flex w-full px-6 p-2 justify-center items-center text-white hover:bg-[#0e1320] cursor-pointer'>
			<div className=' flex items-center gap-3 basis-1/2 lg:flex-1 '>
				<div className=''>
					<img src={props.coins.image} alt='crypto-coin' className='w-[30px]' />
				</div>
				<p className='px-2'>{props.coins.name}</p>
				<p className='text-gray-500'>{props.coins.symbol.toUpperCase()}</p>
			</div>

			<div className=' basis-1/4 lg:flex-1'>
				<p>${props.coins.current_price}</p>
			</div>
			<div className='basis-1/4  lg:flex-1'>
				<p
					className={`${
						props.coins.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'
					} font-stock flex items-center gap-1`}>
					{props.coins.price_change_percentage_24h < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />}
					{props.coins.price_change_percentage_24h.toFixed(2)}%
				</p>
			</div>
			<div className='basis-1/4  lg:flex-1'>${props.coins.market_cap.toLocaleString()}</div>
		</div>
	)
}

export default CoinItem
