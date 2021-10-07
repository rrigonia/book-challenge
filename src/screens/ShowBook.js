import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BookInfo, BookActions } from '../components/book-info';

const ShowBook = () => {
	return (
		<Layout spacing={null}>
			<Flex w='376px' justifyContent='center' h='282px' bg='#FFF6E5'>
				<Box w='151px' h='234px' bg='yellow.800' mt='84px' />
			</Flex>
			<BookInfo
				title='Ramon'
				subTitle='How to make you feel'
				messages={[ 'Lorem ipsum alsd;lakd;las sa;das;kd' ]}
				author='Rigoni'
			/>
			<BookActions />
		</Layout>
	);
};

export default ShowBook;
