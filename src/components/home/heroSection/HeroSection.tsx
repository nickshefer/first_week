import Button from '../../UI/button/Button';
import heroFood from '../../../assets/heroFood.png';
import decorGraph from '../../../assets/heroGraph.png';
import trustPilot from '../../../assets/trustpilotLogo.svg';
import star from '../../../assets/ratingStar.svg';

export default function HeroSection() {
	return (
		<section className='hero'>
			<div className='container hero_content'>
				<div className='hero_info '>
					<div className='hero_subtitle'>OVER 1000 USERS</div>
					<h1 className='hero_title title'>
						Enjoy Foods All Over The <span className='text-primary'>World</span>
					</h1>
					<p className='hero_text'>
						EatLy help you set saving goals, earn cash back offers, Go to
						disclaimer for more details and get paychecks up to two days early.
						Get a <span className='text-primary'>$20 bonus.</span>
					</p>
					<div className='hero_buttons'>
						<Button as='a' href='#'>
							Get Started
						</Button>
						<Button as='a' href='#' variant='outlinePrimary'>
							Go Pro
						</Button>
					</div>
					<div className='hero_rating'>
						<div className='hero_trastpilot'>
							<img src={trustPilot} alt='trustpilot' />
						</div>
						<div className='hero_stars'>
							<div className='hero_star'>
								<img src={star} alt='star' />
								<img src={star} alt='star' />
								<img src={star} alt='star' />
								<img src={star} alt='star' />
								<img src={star} alt='star' />
							</div>
							<span className='hero_rating-num'>4900+</span>
						</div>
					</div>
				</div>
				<div className='hero_decor decor'>
					<div className='decor_img'>
						<img src={heroFood} alt='chicken hell' />
						<div className='decor_meal meal-item'>
							<div className='meal-item_left'>
								<img src={heroFood} alt='chiken hell' />
							</div>
							<div className='meal-item_right'>
								<h3 className='meal-item_title'>Chiken Hell</h3>
								<p className='meal-item_info'>On The Way</p>
								<time className='meal-item_time'>3:09 PM</time>
							</div>
						</div>
					</div>
					<div className='decor_graph'>
						<img src={decorGraph} alt='decorGraph' />
					</div>
				</div>
			</div>
		</section>
	);
}
