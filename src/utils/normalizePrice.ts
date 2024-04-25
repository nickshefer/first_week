export const normalizePrice = (
	price: number
): { dollars: number; cents: string } => {
	return {
		dollars: Math.floor(price),
		cents: ((price - Math.floor(price)) * 100).toFixed()
	};
};
