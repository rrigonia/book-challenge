const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

const client = async (
	endpoint,
	{ data, headers: customHeaders, ...customConfig } = {}
) => {
	const config = {
		method: data ? 'POST' : 'GET',
		headers: {
			'Content-Type': data ? 'application/json' : undefined,
			...customHeaders
		},
		...customConfig
	};

	return fetch(`${baseUrl}${endpoint}`, config).then(async res => {
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
