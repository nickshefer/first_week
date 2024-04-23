import { useResize } from '../../../hooks/UseResize';
import featureleft1 from '../../../assets/featureLeft1.svg';
import featureleft2 from '../../../assets/featureLeft2.svg';
import featureRight1 from '../../../assets/featureRight1.svg';
import featureRight2 from '../../../assets/featureRight2.svg';
import featureTop1 from '../../../assets/featureTop1.svg';
import featureTop2 from '../../../assets/featureTop2.svg';
import featureBottom1 from '../../../assets/featureBottom1.svg';
import featureBottom2 from '../../../assets/featureBottom2.svg';

type Feature = {
	digit: string;
	text: string;
};

const features: Feature[] = [
	{
		digit: '10K+',
		text: 'Satisfied Costumers All Great Over The World'
	},
	{
		digit: '4M',
		text: 'Healthy Dishes Sold Including Milk Shakes Smooth'
	},
	{
		digit: '99.99%',
		text: 'Reliable Customer Support We Provide Great Experiences'
	}
];

export default function FeaturesSection() {
	const { isScreenSm } = useResize();
	return (
		<section className='features'>
			<div className='container '>
				<ul className='features_list'>
					{features.map(feature => (
						<li key={feature.digit} className='features_item'>
							<div className='features_digit'>{feature.digit}</div>
							<p className='features_text'>{feature.text}</p>
						</li>
					))}
				</ul>
				{isScreenSm ? (
					<div className='features_decor'>
						<img src={featureTop1} alt='#' />
						<img src={featureTop2} alt='#' />
						<img src={featureBottom1} alt='#' />
						<img src={featureBottom2} alt='#' />
					</div>
				) : (
					<div className='features_decor'>
						<img src={featureleft1} alt='#' />
						<img src={featureleft2} alt='#' />
						<img src={featureRight1} alt='#' />
						<img src={featureRight2} alt='#' />
					</div>
				)}
			</div>
		</section>
	);
}
