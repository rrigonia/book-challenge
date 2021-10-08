import * as React from 'react';
import {
	Flex,
	InputGroup,
	InputLeftElement,
	Input,
	Spinner,
	Text,
	Button,
	Container
} from '@chakra-ui/react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { HStack } from '@chakra-ui/react';
import ShowBookCard from '../components/ShowBookCard';
import { useMutation, useQuery, useQueryClient } from 'react-query';
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

const Discover = ({query, setQuery, queried, setQueried}) => {
	
	const queryClient = useQueryClient()
	const { data, isLoading, isError, error } = useQuery(
		[ 'books', query ],
		() => client(query),
		{
			
			enabled: queried,
			initialData: () => queryClient.getQueryData(query)
		}
	);

	const {mutate, isLoading: loadingMoreBooks} = useMutation(() => 
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
	const handleSubmit = e => {
		e.preventDefault();
		setQuery(e.target.elements.search.value.replace(' ', '&'));
		setQueried(true)
	};

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
					<Container py='20px' centerContent w='full'><Button colorScheme='gray' width='50%' variant='solid' onClick={mutate}> {loadingMoreBooks ? <Spinner /> :  "Load More"} </Button></Container>
				</HStack> : isError ? <Text> {error.message}</Text> : <Text> Try to search a book...</Text> }
				
			</Flex>
			<Footer />
		</Layout>
	);
};

export default Discover;
