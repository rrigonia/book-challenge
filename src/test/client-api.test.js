import { client } from '../utils/client-api';
import { rest } from 'msw';
import { server } from './test-server';

const baseUrl = process.env.REACT_APP_API_URL;
const mockData = { mockValue: 'VALUE' };

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('makes GET request to the given endpoint', async () => {
	const endpoint = 'test-endpoint';
	const startIndex = 30;
	let query;
	server.use(
		rest.get(`${baseUrl}`, async (req, res, ctx) => {
			query = req.url.searchParams;
			return res(ctx.json(mockData));
		})
	);
	await client(endpoint, startIndex);
	expect(query.get('q')).toBe(endpoint);
	expect(query.get('startIndex')).toBe(String(startIndex));
});

test('allows for config overrides', async () => {
	const endpoint = 'test-endpoint';
	const mockValue = { mock: 'PUT VALUE' };
	let request;
	server.use(
		rest.put(`${baseUrl}`, async (req, res, ctx) => {
			request = req;
			return res(ctx.json(mockValue));
		})
	);
	const customConfig = {
		method: 'PUT',
		headers: {
			'Content-Type': 'fake-type'
		}
	};
	await client(endpoint, 0, customConfig);
	expect(request.headers.get('Content-Type')).toBe(
		customConfig.headers['Content-Type']
	);
});

test('when the data is provided, it is striginfied and method defaults to POST', async () => {
	const endpoint = 'test-endpoint';
	server.use(
		rest.post(`${baseUrl}`, async (req, res, ctx) => {
			return res(ctx.json(req.body));
		})
	);
	const data = { a: 'b' };
	const result = await client(endpoint, 0, { data });
	expect(result).toEqual(data);
});

test('correctly rejects the promise if there is an error', async () => {
	const endpoint = 'test-endpoint';
	const testError = { message: 'test error' };
	server.use(
		rest.get(`${baseUrl}`, async (req, res, ctx) => {
			return res(ctx.status(400), ctx.json(testError));
		})
	);
	await expect(client(endpoint)).rejects.toEqual(testError);
});
