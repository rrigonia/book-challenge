import { client } from './client-api';
import { useQuery, useQueryClient, useMutation } from 'react-query';
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


const loadingBooks = Array.from({ length: 10 }).map((book, idx) => ({
	id: `loading-book-${idx}`,
	...loadingBook
}));

function useBook(id) {
	const newQuery = useQuery([ 'books', id ], () =>
		client(id)
	);
    const book = newQuery.data?.items.find(bk => bk.id === id) ?? loadingBook;
	const image = book.volumeInfo.imageLinks?.thumbnail ?? book.volumeInfo.imageLinks?.smallThumbnail ?? bookPlaceholder;

    return {...newQuery, data: book, image}

}

function useBooks(query, queried) {
	
	const queryClient = useQueryClient()
	const newQuery = useQuery(
		[ 'books', query ],
		() => client(query),
		{
			enabled: queried,
			initialData: () => queryClient.getQueryData(query)
		}
	);
    
    const data = newQuery.data;
	const mutation = useMutation(() => 
		client(query, books.length+3)
			.then(res => {
				const uniqueItems = res.items.filter(it => !data?.items?.some((crt, idx, arr) => crt.id === it.id) );
				return queryClient.setQueryData(
					[`books`, query], {...res, items: [...data?.items, ...uniqueItems]}
				)
			}
		)
	 )

	const books = data?.items ?? loadingBooks

    return {mutation, ...newQuery, data: books}
	
}

export {useBook, useBooks}