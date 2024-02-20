import React from 'react'

const CoinItem = (props) => {
	return (
		<div>
			<p>{props.coins.market_rank}</p>
			<div>
				<img src={props.coins.image} alt='crypto-coin' />
				<p>{props.coins.symbol}</p>
			</div>
			<p>{props.coins.current_price}</p>
		</div>
	)
}

export default CoinItem
