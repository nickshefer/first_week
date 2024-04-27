import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import avatar from '../../../assets/reviewsIcon.png';
import star from '../../../assets/ratingStar.svg';

export default function ReviewsSlider() {
	return (
		<Swiper
			centeredSlides={true}
			className='reviews_slider'
			modules={[Scrollbar]}
			spaceBetween={50}
			slidesPerView={1}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide>
				<div className='reviews-slide'>
					<div className='reviews-slide_header'>
						<div className='rivews-slide_avatar'>
							<img src={avatar} alt='avatar' />
						</div>
						<div className='reviews-slide_title'>
							<div className='reviews-slide_name'>Alexander R.</div>
							<div className='reviews-slide_years'>01 Year With Us</div>
							<div className='reviews-slide_decor'></div>
						</div>
					</div>
					<div className='reviews-slide_text'>
						“ Online invoice payment helps companies save time, are faster and
						save maximum effort for the clients and save maximum effort. Online
						invoice payment helps companies save time ”
					</div>
					<div className='reviews-slide_rating'>
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='reviews-slide'>
					<div className='reviews-slide_header'>
						<div className='rivews-slide_avatar'>
							<img src={avatar} alt='avatar' />
						</div>
						<div className='reviews-slide_title'>
							<div className='reviews-slide_name'>Alexander R.</div>
							<div className='reviews-slide_years'>01 Year With Us</div>
							<div className='reviews-slide_decor'></div>
						</div>
					</div>
					<div className='reviews-slide_text'>
						“ Online invoice payment helps companies save time, are faster and
						save maximum effort for the clients and save maximum effort. Online
						invoice payment helps companies save time ”
					</div>
					<div className='reviews-slide_rating'>
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='reviews-slide'>
					<div className='reviews-slide_header'>
						<div className='rivews-slide_avatar'>
							<img src={avatar} alt='avatar' />
						</div>
						<div className='reviews-slide_title'>
							<div className='reviews-slide_name'>Alexander R.</div>
							<div className='reviews-slide_years'>01 Year With Us</div>
							<div className='reviews-slide_decor'></div>
						</div>
					</div>
					<div className='reviews-slide_text'>
						“ Online invoice payment helps companies save time, are faster and
						save maximum effort for the clients and save maximum effort. Online
						invoice payment helps companies save time ”
					</div>
					<div className='reviews-slide_rating'>
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
