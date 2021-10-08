import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';

const ShowBook = () => {
	return (
		<Layout spacing={null}>
			<Flex
				w='full'
				justifyContent='center'
				h='282px'
				borderRadius='0px 0px 100px 0px'
				bg='#FFF6E5'
			>
				<Box w='151px' h='234px' bg='yellow.800' mt='84px' />
			</Flex>
			<BookInfo
				px='20px'
				title='Hooked'
				subTitle='How to Build Habid-Forming Products'
				messages={[ 'Lorem ipsum alsd;lakd;las sa;das;kd' ]}
				author='Nir Eyal'
			/>
			<BookActions />
		</Layout>
	);
};

export default ShowBook;
