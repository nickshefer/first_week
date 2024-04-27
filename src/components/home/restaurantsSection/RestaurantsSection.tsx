import { useEffect, useState } from 'react';
import Loader from '../../UI/loader/Loader';
import RestauratsCard from './RestauratsCard';
import { FaArrowRight } from 'react-icons/fa';

export interface Restaurant {
	title: string;
	tag: string;
	rating: number;
	delivery_time: number;
	img_url: string;
}

export default function RestaurantsSection() {
	const [data, setData] = useState<Restaurant[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://6625022f04457d4aaf9d8f31.mockapi.io/posts')
			.then(res => res.json())
			.then(data => {
				setData(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<section className='restaurants'>
			<div className='container restaurants_content'>
				<h3 className='restaurants_title'>
					Our Top <span className='text-primary'>Restaurants</span>
				</h3>
				{loading ? (
					<div className='restaurants_loader'>
						<Loader size={100} />
					</div>
				) : (
					<>
						<ul className='restaurants_list'>
							{data.map((item: Restaurant) => (
								<RestauratsCard
									key={`${Date.now() * Math.random()}`}
									item={item}
								/>
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
