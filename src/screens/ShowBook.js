import React from 'react';
import { Flex, Image, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useBook } from '../utils/books';

const ShowBook = () => {
	const { bookId: id } = useParams();
	const { data: book, isLoading, isError, error, image } = useBook(id);
	console.log(book);

	return (
		<Layout spacing={null}>
			<Link style={{ position: 'absolute', left: '5%', top: '2%' }} to='/books'>
				{' '}
				<Button>Back</Button>{' '}
			</Link>
			<Flex
				w='full'
				justifyContent='center'
				h='282px'
				borderRadius='0px 0px 100px 0px'
				bg='#FFF6E5'
			>
				<Image src={image} maxW='151px' h='234px' mt='84px' />
			</Flex>
			<BookInfo
				px='20px'
				book={book.volumeInfo}
				image={image}
				isLoading={isLoading}
				showError={isError}
				error={error}
			/>
			<BookActions />
		</Layout>
	);
};

export default ShowBook;
