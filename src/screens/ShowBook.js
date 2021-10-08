import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useBook } from '../utils/books';
import { BgOvals, Oval } from '../components/lib';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import bgImage from '../assets/oval-5.png';

const ShowBook = () => {
	const { bookId: id } = useParams();
	const { data: book, isLoading, isError, error, image } = useBook(id);
	console.log(book);

	return (
		<Layout spacing={null}>
			<Link
				style={{
					position: 'absolute',
					width: 7,
					height: 14,
					left: '9%',
					top: '7%',
					color: 'black',
					padding: '8px'
				}}
				to='/books'
			>
				<HiArrowNarrowLeft />
			</Link>
			<Flex
				w='full'
				justifyContent='center'
				h='282px'
				borderRadius='0px 0px 100px 0px'
				bg='#FFF6E5'
			>
				{/* <BgOvals /> */}
				<Image src={image} maxW='151px' h='234px' mt='84px' zIndex='2' />
			</Flex>
			<BgOvals />
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
