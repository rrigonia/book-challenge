import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';
import { useParams } from 'react-router';
import { useBook } from '../utils/books';
import { BgOvals } from '../components/lib';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router';

const ShowBook = () => {
	const { bookId: id } = useParams();
	const { data: book, isLoading, isError, error, image } = useBook(id);
	const history = useHistory();
	console.log(history);

	return (
		<Layout spacing={null}>
			<Text
				style={{
					position: 'absolute',
					width: 7,
					height: 14,
					left: '9%',
					top: '7%',
					color: 'black',
					padding: '8px'
				}}
				onClick={history.goBack}
			>
				<HiArrowNarrowLeft />
			</Text>
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
