const baseUrl = process.env.REACT_APP_API_URL;
const max = 20;

const client = async (
	endpoint,
	startIndex = 0,
	{ data, headers: customHeaders, ...customConfig } = {}
) => {
	const config = {
		method: data ? 'POST' : 'GET',
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			'Content-Type': data ? 'application/json' : undefined,
			...customHeaders
		},
		...customConfig
	};

	return fetch(
		`${baseUrl}?q=${encodeURIComponent(
			endpoint
		)}&printType=books&maxResults=${max}&startIndex=${startIndex}`,
		config
	).then(async res => {
		// if(res.status === '404'){

		// }
		const data = await res.json();
		if (res.ok) {
			return data;
		} else {
			return Promise.reject(data);
		}
	});
};

export { client };
