import React from 'react';
import { Text, HStack, VStack } from '@chakra-ui/react';
import { BiHome, BiBookAlt } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Footer(props) {
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
			zIndex='5'
			{...props}
		>
			<NavLink exact activeStyle={{ color: 'black' }} to='/'>
				<VStack spacing={0}>
					<BiHome size='24px' /> <Text fontWeight='bold'>Home</Text>
				</VStack>
			</NavLink>
			<NavLink activeStyle={{ color: 'black' }} exact to='/books'>
				<VStack spacing={0}>
					<BiBookAlt size='24px' /> <Text>Books</Text>
				</VStack>
			</NavLink>
			<NavLink exact activeStyle={{ color: 'black' }} to='/profile/profileId'>
				<VStack spacing={0}>
					<BsPerson size='24px' /> <Text>Profile</Text>
				</VStack>
			</NavLink>
		</HStack>
	);
}

Footer = React.memo(Footer);

export default Footer;
