import React from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import bookPlaceholder from '../assets/book-placeholder.svg';
import { Link } from 'react-router-dom';



const ShowBookCard = ({ volumeInfo, id }) => {
	const { title, authors, imageLinks } = volumeInfo;
	const image = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? bookPlaceholder;

	return (
		
			<VStack maxW='32.5%' alignItems='flex-start' p={3}>
				<Link to={`/books/${id}`}><Image src={image} h='152px' borderRadius='5px' /></Link>
				<Link to={`/books/${id}`}>

				<VStack spacing={0} alignItems='flex-start'>
					<Text lineHeight='14px' fontSize='12px'>
						{title.substring(0, 10)} {title.length > 10 && "..."}
					</Text>
					{ <Text lineHeight='12px' pt='5px' fontSize='10px'>
						by {authors ? `${authors[0].substring(0, 8)} ${authors[0].length > 8 ? '...' : null}` : 'unknown' } 
					</Text> }
				</VStack>
				</Link>
			</VStack>
	
	);
};

export default ShowBookCard;
