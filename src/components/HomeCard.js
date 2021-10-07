import React from 'react';
import { VStack, HStack, Text } from '@chakra-ui/react';

const HomeCard = ({ title, link, children, ...props }) => {
	return (
		<VStack as='section' w='full' alignItems='flex-start' {...props}>
			<HStack w='full' mb='15px' justifyContent='space-between'>
				<Text>{title}</Text>
				{link}
			</HStack>
			<HStack
				w='full'
				justifyContent='flex-start'
				overflow='hidden'
				flexWrap='nowrap'
			>
				{children}
			</HStack>
		</VStack>
	);
};

export default HomeCard;
