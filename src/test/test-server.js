import { rest } from 'msw';
import { setupServer } from 'msw/node';
const baseUrl = process.env.REACT_APP_API_URL;
const mockData = { mockValue: 'VALUE' };
const handlers = [
	rest.get(`${baseUrl}`, async (req, res, ctx) => {
		return res(ctx.json(mockData));
	})
];

const server = setupServer(...handlers);

export { server };
