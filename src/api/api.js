const getCollections = async () => {
	const response = await fetch(
		"https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}"
	);
	if (!response.ok) {
		throw {
			message: "Couldn't fetch collections from server",
			statusText: response.statusText,
			status: response.status,
		};
	}

	const {
		data: {
			collections: { edges },
		},
	} = await response.json();

	return edges;
};

const getProductsInCollection = async (collectionHandle) => {
	const response = await fetch(
		`https://mock.shop/api?query={collection(handle:%20%22${collectionHandle}%22){title%20products(first:%2020){edges%20{node%20{id%20title%20handle%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}}`
	);
	if (!response.ok) {
		throw {
			message: "Couldn't fetch collections from server",
			statusText: response.statusText,
			status: response.status,
		};
	}

	const { data } = await response.json();
	const {
		collection: {
			products: { edges },
		},
	} = data;
	return edges;
};

const getProductVariants = async (productHandle) => {
	const response = await fetch(
		`https://mock.shop/api?query={product(handle:%20%22${productHandle}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%2020){edges%20{node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`
	);
	if (!response.ok) {
		throw {
			message: "Couldn't fetch product from server",
			statusText: response.statusText,
			status: response.status,
		};
	}

	const { data } = await response.json();
	const { product } = data;
	return product;
};
export { getCollections, getProductsInCollection, getProductVariants };
