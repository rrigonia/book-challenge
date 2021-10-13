import App from '../App';
import React from 'react';
import {
	render,
	screen,
	waitForElementToBeRemoved
} from '@testing-library/react';
import AppProvider from '../context';
import bookPlaceholder from '../assets/book-placeholder.svg';

const testBook = {
	id: 'testedBook',
	volumeInfo: {
		title: 'Teste Book',
		subtitle: 'Sub Testing',
		authors: [ 'Me' ],
		description: 'A book made for testing',
		imageLinks: {
			thumbnail: bookPlaceholder
		}
	}
};

test('render all the book information', async () => {
	window.history.pushState({}, 'books', `/books/${testBook.id}`);
	const originalFetch = window.fetch;
	window.fetch = async (url, config) => {
		if (url.includes(testBook.id)) {
			return {
				ok: true,
				json: async () => ({
					items: [ testBook ]
				})
			};
		}
		return originalFetch(url, config);
	};

	render(<App />, { wrapper: AppProvider });
	await waitForElementToBeRemoved(() => screen.getAllByText(/Loading.../i));
	expect(screen.getByText(testBook.volumeInfo.title)).toBeInTheDocument();
	expect(screen.getByText(testBook.volumeInfo.subtitle)).toBeInTheDocument();
	expect(screen.getByText(testBook.volumeInfo.authors[0])).toBeInTheDocument();
	expect(screen.getByText(testBook.volumeInfo.description)).toBeInTheDocument();
});
