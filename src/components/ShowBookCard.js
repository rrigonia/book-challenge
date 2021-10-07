import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

const ShowBookCard = () => {
	return (
		<VStack
			bg='red.300'
			justifyContent='center'
			minW='30%'
			alignItems='flex-start'
			spacing={0}
			mb={3}
		>
			<Box h='153px' w='105px' bg='yellow.300' />
			<VStack spacing={0} alignItems='flex-start'>
				<Text lineHeight='14px' fontSize='12px'>
					The One Thing
				</Text>
				<Text lineHeight='12px' pt='5px' fontSize='10px'>
					by Gary Keller
				</Text>
			</VStack>
		</VStack>
	);
};

export default ShowBookCard;
