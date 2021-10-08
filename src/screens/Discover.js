import * as React from 'react';
import {
	Flex,
	InputGroup,
	InputLeftElement,
	Input,
	Spinner,
	Text
} from '@chakra-ui/react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { HStack } from '@chakra-ui/react';
import ShowBookCard from '../components/ShowBookCard';
import { useQuery } from 'react-query';
import { client } from '../utils/client-api';
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

const Discover = () => {
	const [ queried, setQueried ] = React.useState(false);
	const [ query, setQuery ] = React.useState('');

	const { data, isLoading, isError, error } = useQuery(
		[ 'books', query ],
		() => client(query),
		{
			onSuccess: () => {},
			enabled: queried
		}
	);

	const books = data?.items ?? loadingBooks

	const handleSubmit = e => {
		e.preventDefault();
		setQuery(e.target.elements.search.value);
		setQueried(true);
	};

	console.log(books);

	return (
		<Layout spacing='40px'>
			<form onSubmit={handleSubmit}>
				<InputGroup mt='50px'>
					<InputLeftElement
						as='button'
						type='submit'
						pointerEvents='none'
						children={
							isLoading ? (
								<Spinner size='sm' />
							) : isError ? (
								<FaTimes color='red' />
							) : (
								<FaSearch color='#DCD8D8' />
							)
						}
					/>
					<Input
						w='336px'
						type='search'
						placeholder='Search book'
						textColor='black'
						id='search'
					/>
				</InputGroup>
			</form>
			<Flex w='full' h='80%' alignItems='flex-start' justifyContent='center'>
			{queried ? <HStack
					justifyContent='space-around'
					overflow='auto'
					maxH='full'
					w='full'
					flexWrap='wrap'
					alignItems='flex-start'
					spacing={0}
					pb={10}
				>
					{books.map(book => <ShowBookCard key={book.id} {...book} />)}
				</HStack> : <Text> Try to search a book...</Text> }
				
			</Flex>
			<Footer />
		</Layout>
	);
};

export default Discover;
