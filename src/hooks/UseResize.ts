import { useState, useEffect } from 'react';

const SCREEN_SM = 768;

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = e => {
			setWidth(e.target.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
		isScreenSm: width <= SCREEN_SM
	};
};
