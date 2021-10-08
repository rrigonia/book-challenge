import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import * as styles from '../style/styles';
import HomeCard from '../components/HomeCard';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Home = () => {
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
			<HomeCard title='Discover new book' link={<Text>More</Text>}>
				<Box bg='red.300' w='272px' flexShrink={0} h='139px' />
				<Box bg='red.300' w='272px' flexShrink={0} h='139px' />
			</HomeCard>
			<HomeCard title='Currently Reading' link={<Text>All</Text>}>
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
			</HomeCard>
			<HomeCard title='Reviews of The Days' link={<Text>All videos</Text>}>
				<Box bg='red.300' w='335px' flexShrink={0} h='128px' />
			</HomeCard>
			<Footer />
		</Layout>
	);
};

export default Home;
