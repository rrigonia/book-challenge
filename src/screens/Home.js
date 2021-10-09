import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import * as styles from '../style/styles';
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

const randomWord = 'Rock and Roll';

const Home = () => {
	const { data: books, isLoading } = useBooks(randomWord);
	return (
		<Layout>
			<Box px='20px'>
				<HeaderInput />
			</Box>
			<Heading
				lineHeight='28,64px'
				fontSize='24px'
				fontWeight='normal'
				alignSelf='flex-start'
				px='20px'
			>
				Hi,{' '}
				<Text
					display='inline'
					fontWeight='600'
					textColor={styles.colors.text.seccondary}
				>
					Mehmed Al Fatih 👋
				</Text>
			</Heading>
			<BgOvalsHome />
			<HomeSection px='20px' title='Discover new book' link='More'>
				{books.map((book, idx) => (
					<DiscoverBookCard
						key={book.id}
						{...book}
						loading={isLoading}
						idx={idx}
					/>
				))}
			</HomeSection>
			<ReadingSection title='Currently Reading' link='All'>
				{books.slice(5, 7).map(book => <ReadingBook key={book.id} {...book} />)}
			</ReadingSection>
			<HomeSection px='20px' title='Reviews of The Days' link='All videos'>
				<Box bg='red.300' w='335px' flexShrink={0} h='128px' />
			</HomeSection>
			<Footer />
		</Layout>
	);
};

export default Home;
