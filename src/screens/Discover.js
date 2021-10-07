import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import * as styles from '../style/styles';
import HomeCard from '../components/HomeCard';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Container, HStack, Grid, GridItem, VStack } from '@chakra-ui/react';
import ShowBookCard from '../components/ShowBookCard';

const Discover = () => {
	return (
		<Layout spacing='40px'>
			<HeaderInput />
			<Flex
				w='full'
				h='80%'
				alignItems='flex-start'
				justifyContent='center'
				bg='red.600'
			>
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
					<ShowBookCard />
					<ShowBookCard />
				</HStack>
			</Flex>
			<Footer />
		</Layout>
	);
};

export default Discover;
