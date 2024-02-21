import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = (props) => {
	return (
		<div className='flex justify-center items-center font-main '>
			<div className='flex flex-col gap-2 max-container w-full p-4 rounded-2xl border-[0.2px] border-[#333] shadow-xl bg-[#090C14]'>
				<div className='flex justify-between font-[400] text-slate-500 items-center px-6 py-4 '>
					<p className='basis-1/2 lg:flex-1 '>Coin name</p>
					<p className='basis-1/4  lg:flex-1'>Last price</p>
					<p className='basis-1/4 lg:flex-1'>24h Change</p>
					<p className='basis-1/4  lg:flex-1'>Market cap</p>
				</div>
				{props.coins.map((coins) => {
					return (
						<Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
							<CoinItem coins={coins} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Coins
