import Badge from '../../UI/badge/Badge';
import { Dish } from './DishesSection';
import { FaPlus } from 'react-icons/fa6';
import { GrFavorite } from 'react-icons/gr';
import star from '../../../assets/restaurantsStar.svg';
import { normalizePrice } from '../../../utils/normalizePrice';

export default function DishesCard(props: { item: Dish }) {
	return (
		<li className='dishes-card'>
			<a href='#'>
				<div className='dishes-card_top'>
					<img src={props.item.img_url} alt={props.item.name} />
				</div>
				<div className='dishes-card_middle'>
					<Badge variant={props.item.tag} />
					<h4 className='dishes-card_title'>{props.item.name}</h4>

					<div className='dishes-card_info'>
						<div className='dishes-card_time'>
							{`${props.item.delivery_time}min`}
						</div>
						<div className='dishes-card_rating'>
							<img src={star} alt='star' />
							<span className='dishes-card_rating-num'>
								{props.item.rating}
							</span>
						</div>
					</div>
				</div>
				<div className='dishes-card_bottom'>
					<div className='dishes-card_price'>
						<span className='dollars'>{`$${
							normalizePrice(props.item.price).dollars
						}`}</span>
						<span className='cents'>{`.${
							normalizePrice(props.item.price).cents
						}`}</span>
					</div>
					<button className='dishes-card_button'>
						<FaPlus size={20} color='#fff' />
					</button>
				</div>
			</a>
			<button className='dishes-card_favorite-btn'>
				<GrFavorite size={21} color={'#323142'} />
			</button>
		</li>
	);
}
