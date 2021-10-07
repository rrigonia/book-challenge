import React from 'react';
import * as styles from '../style/styles';
import {
	Text,
	HStack,
	StackDivider,
	Heading,
	VStack,
	Stack
} from '@chakra-ui/react';
import { BiHome, BiBookAlt } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';

const Footer = () => {
	return (
		<HStack
			w='full'
			h='59px'
			bg='#fff'
			p='20px'
			position='fixed'
			bottom={0}
			justifyContent='space-around'
			alignItems='center'
			fontSize='10px'
			fontWeight='400'
			color='#CFCBD2'
		>
			<VStack spacing={0}>
				<BiHome size='24px' /> <Text fontWeight='bold'>Home</Text>
			</VStack>
			<VStack spacing={0} color='black'>
				<BiBookAlt size='24px' /> <Text>Books</Text>
			</VStack>
			<VStack spacing={0}>
				<BsPerson size='24px' /> <Text>Profile</Text>
			</VStack>
		</HStack>
	);
};

export default Footer;
