import { FaArrowRight } from 'react-icons/fa';
import screen from '../../../assets/appImg.png';
import Button from '../../UI/button/Button';

export default function AppSection() {
	return (
		<section className='app'>
			<div className='container app_content'>
				<div className='app_img'>
					<img src={screen} alt='mobile screen' />
				</div>
				<div className='app_info'>
					<h2 className='app_title title'>
						Premium <span className='text-primary'>Quality</span> For Your
						Health
					</h2>
					<ul className='app_list'>
						<li className='app_list-item'>
							Premium quality food is made with ingredients that are packed with
							essential vitamins, minerals.
						</li>
						<li className='app_list-item'>
							These foods promote overall wellness by support healthy digestion
							and boosting immunity
						</li>
					</ul>
					<div className='app_button'>
						<Button as='a' href='#'>
							Download <FaArrowRight />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
