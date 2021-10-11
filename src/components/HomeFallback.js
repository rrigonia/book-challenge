import React from 'react';
import { Flex, Box, Heading, Spinner } from '@chakra-ui/react';
import { HomeSection, ReadingSection } from '../components/HomeSection';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { BgOvalsHome } from '../components/lib';

const HomeFallback = () => {
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
				Loading...
			</Heading>
			<BgOvalsHome />
			<HomeSection px='20px' title='Discover new book' link='More'>
				<Spinner />
			</HomeSection>
			<ReadingSection title='Currently Reading' link='All'>
				<Spinner />
			</ReadingSection>
			<HomeSection
				px='20px'
				last={true}
				title='Reviews of The Days'
				link='All videos'
			>
				<Flex h='182px'>
					<Spinner />
				</Flex>
			</HomeSection>
			<Footer />
		</Layout>
	);
};

export default HomeFallback;
