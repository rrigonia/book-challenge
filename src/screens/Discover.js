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
import { useBooks } from '../utils/books';

const Discover = ({ query, setQuery, queried, setQueried }) => {
	const { data: books, isLoading, isError, error, mutation } = useBooks(
		query,
		queried
	);

	const { mutate, isLoading: loadingMoreBooks } = mutation;

	const handleSubmit = e => {
		e.preventDefault();
		setQuery(e.target.elements.search.value.replace(' ', '&'));
		setQueried(true);
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
				{queried ? (
					<HStack
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
						<Container py='20px' maxW='full' centerContent w='full'>
							<Button
								colorScheme='gray'
								bg='gray.200'
								width='50%'
								variant='solid'
								onClick={mutate}
							>
								{' '}
								{loadingMoreBooks ? <Spinner /> : 'Load More'}{' '}
							</Button>
						</Container>
					</HStack>
				) : isError ? (
					<Text> {error.message}</Text>
				) : (
					<Text> Try to search a book...</Text>
				)}
			</Flex>
			<Footer />
		</Layout>
	);
};

export default Discover;
