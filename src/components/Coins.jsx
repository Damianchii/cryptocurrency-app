import CoinItem from './CoinItem'

const Coins = (props) => {
	return (
		<div className='bg-[#050810]'>
			<div className='flex flex-col w-[80%]'>
				<div className='flex justify-between'>
					<p>#</p>
					<p>Coin</p>
					<p>Price</p>
					<p>24h</p>
					<p>Volume</p>
					<p>Mkt Cap</p>
				</div>
				{props.coins.map((coin) => {
					return <CoinItem coins={coin} />
				})}
			</div>
		</div>
	)
}

export default Coins
