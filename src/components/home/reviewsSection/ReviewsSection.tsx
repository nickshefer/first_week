import 'swiper/css/scrollbar';
import 'swiper/css';
import ReviewsSlider from './ReviewsSlider';

export default function ReviewsSection() {
	return (
		<section className='reviews'>
			<div className='container reviews_content'>
				<h2 className='reviews_title'>
					<span className='text-primary'>Customer</span> Say
				</h2>
				<ReviewsSlider />
			</div>
		</section>
	);
}
