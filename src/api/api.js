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

export { getCollections };
