import Home from '../pages/Home';

interface RouteObject {
	path: string;
	element: React.ReactNode | null;
}

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />
	}
];
