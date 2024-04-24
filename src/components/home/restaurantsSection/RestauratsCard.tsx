import { Restaurant } from './RestaurantsSection';
import star from '../../../assets/restaurantsStar.svg';
import Badge from '../../UI/badge/Badge';

export default function RestauratsCard(props: { item: Restaurant }) {
	return (
		<li className='restaurants-card'>
			<a href='#'>
				<div className='restaurants-card_top'>
					<img src={props.item.img_url} alt={props.item.title} />
				</div>
				<div className='restaurants-card_bottom'>
					<Badge variant={props.item.tag} />
					<h4 className='restaurants-card_title'>{props.item.title}</h4>
					<div className='restaurants-card_info'>
						<div className='restaurants-card_time'>
							{`${props.item.delivery_time}min`}
						</div>
						<div className='restaurants-card_rating'>
							<img src={star} alt='star' />
							<span className='restaurants-card_rating-num'>
								{props.item.rating}
							</span>
						</div>
					</div>
				</div>
			</a>
			<div className='restaurants-card_bookmark'>
				<svg
					width='15'
					height='21'
					viewBox='0 0 15 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.9765 0.88436C9.07493 0.397922 6.097 0.397922 3.19544 0.88436C2.13539 1.06207 1.2912 1.87587 1.07866 2.93105C0.104947 7.76505 0.0518189 12.7393 0.922059 17.593L1.27637 19.5691C1.38561 20.1785 2.12846 20.422 2.57726 19.9957L6.85392 15.9328C7.26415 15.5431 7.90778 15.5431 8.31801 15.9328L12.5947 19.9957C13.0435 20.422 13.7863 20.1785 13.8956 19.5691L14.2499 17.593C15.1201 12.7393 15.067 7.76505 14.0933 2.93105C13.8807 1.87587 13.0365 1.06207 11.9765 0.88436Z'
						fill='#6C5FBC'
					/>
				</svg>
			</div>
		</li>
	);
}
