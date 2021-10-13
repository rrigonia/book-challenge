import App from '../App';
import React from 'react';
import {
	render,
	screen,
	waitForElementToBeRemoved
} from '@testing-library/react';
import AppProvider from '../context';

test('render all the book information', async () => {
	window.history.pushState({}, 'books', `/books/1234`);
	render(<App />, { wrapper: AppProvider });
	// await waitForElementToBeRemoved(() => screen.getAllByText(/Loading.../i));

	screen.debug();
});
