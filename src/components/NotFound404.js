import React from 'react';
import { Flex, Image, Heading, Stack, Button } from '@chakra-ui/react';
import Layout from './Layout';
import { BgOvals } from './lib';
import { useHistory } from 'react-router';
import image from '../assets/error-404.png';

const NotFound404 = () => {
	const history = useHistory();

	return (
		<Layout spacing={null}>
			<Flex
				w='full'
				justifyContent='center'
				h='35vh' //35%
				borderRadius='0px 0px 100px 0px'
				bg='red.400'
			>
				<Image
					src={image}
					maxW='40vw'
					h='28vh'
					mt='84px'
					zIndex='2'
					borderRadius='5px'
				/>
			</Flex>
			<BgOvals />
			<Stack mt='67px' textAlign='center' w='full' h='full'>
				<Heading fontSize='min(3vh, 8vw)' fontWeight='700'>
					Page Not Found :(
				</Heading>
				<Flex justifyContent='center' alignItems='center' pt='min(2.5vh, 7vw)'>
					<Button
						colorScheme='gray'
						bg='gray.300'
						fontSize='min(2.5vh, 7vw)'
						p={5}
						onClick={() => history.push('/')}
					>
						Go Home
					</Button>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default NotFound404;
