import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import * as styles from '../style/styles';
import { HomeSection, DiscoverBookCard } from '../components/HomeSection';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Oval } from '../components/lib';
import bgImage from '../assets/oval-5.png';
import { useBooks } from '../utils/books';

const Home = () => {
	const { data: books, isLoading } = useBooks('games');
	return (
		<Layout px='20px'>
			<HeaderInput />
			<Heading
				lineHeight='28,64px'
				fontSize='24px'
				fontWeight='normal'
				alignSelf='flex-start'
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
			<Oval
				style={{
					width: 127,
					height: 127,
					left: '77.4%',
					top: '18%',
					border: 'none',
					background: `url(${bgImage})`
				}}
			/>
			<Oval
				style={{
					width: 127,
					height: 127,
					left: '7%',
					top: '24%',
					border: 'none',
					background: `url(${bgImage})`
				}}
			/>
			<HomeSection title='Discover new book' link={<Text>More</Text>}>
				{books.map((book, idx) => (
					<DiscoverBookCard {...book} loading={isLoading} idx={idx} />
				))}
			</HomeSection>
			<HomeSection title='Currently Reading' link={<Text>All</Text>}>
				<Flex
					alignItems='center'
					bg='red.300'
					w='331px'
					flexShrink={0}
					h='100px'
				>
					<Box ml='19px' w='91px' h='136px' bg='yellow.300' />
				</Flex>
				<Box bg='red.300' w='272px' flexShrink={0} h='139px' />
			</HomeSection>
			<HomeSection title='Reviews of The Days' link={<Text>All videos</Text>}>
				<Box bg='red.300' w='335px' flexShrink={0} h='128px' />
			</HomeSection>
			<Footer />
		</Layout>
	);
};

export default Home;
