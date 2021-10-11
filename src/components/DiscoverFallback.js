import * as React from 'react';
import {
	Flex,
	InputGroup,
	InputLeftElement,
	Input,
	Spinner
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const DiscoverFallback = () => {
	return (
		<Layout spacing='40px'>
			<form>
				<InputGroup mt='50px'>
					<InputLeftElement
						as='button'
						type='submit'
						pointerEvents='none'
						children={<FaSearch color='#DCD8D8' />}
					/>
					<Input
						w='336px'
						type='search'
						placeholder='Search book'
						textColor='black'
						id='search'
					/>
				</InputGroup>
			</form>

			<Flex w='full' h='80%' alignItems='flex-start' justifyContent='center'>
				<Spinner />
			</Flex>
			<Footer />
		</Layout>
	);
};

export default DiscoverFallback;
