import { client } from './client-api';
import { useQuery } from '@chakra-ui/media-query';
import bookPlaceholder from '../assets/book-placeholder.svg';

const loadingBook = {
	volumeInfo: {
		title: 'Loading...',
		subtitle: 'Loading...',
		authors: [ 'Loading...' ],
		averageRating: '...',
		imageLinks: {
			thumbnail: bookPlaceholder
		}
	}
};

function useBook(query) {
	const newQuery = useQuery([ 'books', query ], () =>
		client(query)
	);
    const book = newQuery.data ?? loadingBook

    return {...newQuery, data: book}

}

export {useBook}