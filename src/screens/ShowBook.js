import React from 'react';
import { Flex, Image, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { client } from '../utils/client-api';
import bookPlaceholder from '../assets/book-placeholder.svg';
import { Link } from 'react-router-dom';

const loadingBook = {
	volumeInfo: {
		title: 'Loading...',
		subtitle: 'Loading...',
		authors: [ 'Loading...'],
		averageRating: '...',
		imageLinks: {
			thumbnail: bookPlaceholder
		}
	}
};

const ShowBook = () => {
	
	const { bookId: id } = useParams();
	const { data, isLoading, isError, error } = useQuery([ 'books', id ], () =>
		client(id)
	);
	const book = data?.items.find(bk => bk.id === id) ?? loadingBook;
	const image = book.volumeInfo.imageLinks?.thumbnail ?? book.volumeInfo.imageLinks?.smallThumbnail ?? bookPlaceholder;


	return (
		<Layout spacing={null}>
		<Link style={{position: 'absolute', left: '5%', top: '2%'}} to='/books' > <Button>Back</Button> </Link>
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
