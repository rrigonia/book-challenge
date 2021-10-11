import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import {
	HomeSection,
	DiscoverBookCard,
	ReadingBook,
	ReadingSection
} from '../components/HomeSection';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { BgOvalsHome } from '../components/lib';
import { useBooks } from '../utils/books';
import bitmap from '../assets/Bitmap.png';

const randomWord = 'Rock and Roll';

const Home = ({ user }) => {
	const { data: books, isLoading } = useBooks(randomWord);
	return (
		<Layout overflowX='hidden' overflowY='auto'>
			<Box px='20px'>
				<HeaderInput />
			</Box>
			<Heading
				lineHeight='28,64px'
				fontSize='xl'
				fontWeight='normal'
				alignSelf='flex-start'
				px='20px'
			>
				Hi,{' '}
				<Text
					as='span'
					display='inline'
					fontWeight='600'
					textColor='brand.seccondary'
				>
					{user.name}
				</Text>{' '}
				👋
			</Heading>
			<BgOvalsHome />
			<HomeSection px='20px' title='Discover new book' link='More'>
				{books
					.slice(0, 3)
					.map((book, idx) => (
						<DiscoverBookCard
							key={book.id}
							{...book}
							loading={isLoading}
							idx={idx}
						/>
					))}
			</HomeSection>
			<ReadingSection title='Currently Reading' link='All'>
				{books
					.slice(5, 8)
					.map(book => (
						<ReadingBook key={book.id} {...book} loading={isLoading} />
					))}
			</ReadingSection>
			<HomeSection
				px='20px'
				last={true}
				title='Reviews of The Days'
				link='All videos'
			>
				<Flex h='182px'>
					<Image src={bitmap} />
				</Flex>
			</HomeSection>
			<Footer />
		</Layout>
	);
};

export default Home;
