import { useEffect, useState } from 'react';
import Loader from '../../UI/loader/Loader';
import { FaArrowRight } from 'react-icons/fa6';
import DishesCard from './DishesCard';

export interface Dish {
	id: number;
	name: string;
	tag: string;
	rating: number;
	price: number;
	delivery_time: number;
	img_url: string;
}

export default function DishesSection() {
	const [data, setData] = useState<Dish[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://6625022f04457d4aaf9d8f31.mockapi.io/foods')
			.then(res => res.json())
			.then(data => {
				setData(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<section className='dishes'>
			<div className='container dishes_content'>
				<h2 className='dishes_title'>
					Our Top <span className='text-primary'>Dishes</span>
				</h2>
				{loading ? (
					<div className='restaurants_loader'>
						<Loader size={100} />
					</div>
				) : (
					<>
						<ul className='dishes_list'>
							{data.map(dish => (
								<DishesCard key={dish.id} item={dish} />
							))}
						</ul>
						<div className='view-all'>
							<a href='#'>
								View All <FaArrowRight />
							</a>
						</div>
					</>
				)}
			</div>
		</section>
	);
}
