import React from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import bookPlaceholder from '../assets/book-placeholder.svg';



const ShowBookCard = ({ volumeInfo }) => {
	const { title, authors, imageLinks } = volumeInfo;
	const image = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? bookPlaceholder
	return (
		<VStack maxW='30%' alignItems='flex-start' p={3}>
			<Image src={image} h='152px' />

			<VStack spacing={0} alignItems='flex-start'>
				<Text lineHeight='14px' fontSize='12px'>
					{title.substring(0, 10)}...
				</Text>
				<Text lineHeight='12px' pt='5px' fontSize='10px'>
					by {authors[0].substring(0, 8)} {authors[0].length > 8 ? '...' : null}
				</Text>
			</VStack>
		</VStack>
	);
};

export default ShowBookCard;
