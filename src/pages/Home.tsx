import AppSection from '../components/home/appSection/AppSection';
import ControlSection from '../components/home/controlSection/ControlSection';
import DishesSection from '../components/home/dishesSection/DishesSection';
import FeaturesSection from '../components/home/featuresSection/FeaturesSection';
import HeroSection from '../components/home/heroSection/HeroSection';
import RestaurantsSection from '../components/home/restaurantsSection/RestaurantsSection';
import ReviewsSection from '../components/home/reviewsSection/ReviewsSection';
import SaleSection from '../components/home/saleSection/SaleSection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<AppSection />
			<RestaurantsSection />
			<DishesSection />
			<ControlSection />
			<ReviewsSection />
			<SaleSection />
		</main>
	);
}
