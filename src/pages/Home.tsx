import AppSection from '../components/home/appSection/AppSection';
import DishesSection from '../components/home/dishesSection/DishesSection';
import FeaturesSection from '../components/home/featuresSection/FeaturesSection';
import HeroSection from '../components/home/heroSection/HeroSection';
import RestaurantsSection from '../components/home/restaurantsSection/RestaurantsSection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<AppSection />
			<RestaurantsSection />
			<DishesSection />
		</main>
	);
}
