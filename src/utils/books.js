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

const notFoundBook = {
	volumeInfo: {
		title: 'Not Found',
		subtitle: '',
		authors: [ '' ],
		averageRating: '...',
		description: 'Try to search another book',
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
    let book = newQuery.data?.items?.find(bk => bk.id === id) ?? loadingBook;
	// case didn`t find any book, throw manually the error
	if(newQuery.isSuccess && book === loadingBook){
		newQuery.isError = true;
		newQuery.error =  {message: 'Book Not Found'}
	}
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