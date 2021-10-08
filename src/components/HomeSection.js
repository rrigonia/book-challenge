import React from 'react';
import {
	VStack,
	HStack,
	Text,
	Flex,
	Image,
	Container,
	Spinner
} from '@chakra-ui/react';
import { Oval } from './lib';
import bgPath from '../assets/path-2.png';
import bgOval from '../assets/Oval-1.png';
import miniGraph from '../assets/miniIcon-1.svg';
import bookPlaceholder from '../assets/book-placeholder.svg';
import { Link } from 'react-router-dom';

const HomeSection = ({ title, link, children, ...props }) => {
	return (
		<VStack as='section' w='full' zIndex='5' alignItems='flex-start' {...props}>
			<HStack w='full' mb='15px' justifyContent='space-between'>
				<Text>{title}</Text>
				{link}
			</HStack>
			<HStack
				w='full'
				justifyContent='flex-start'
				overflow='auto'
				flexWrap='nowrap'
			>
				{children}
			</HStack>
		</VStack>
	);
};

const DiscoverBookCard = ({ volumeInfo, loading, id, idx }) => {
	const { title, authors, imageLinks } = volumeInfo;
	const image = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? bookPlaceholder;
	const odd = idx % 2 === 0;
	const isFirst = idx === 0;
	if (loading) {
		return (
			<Flex
				bg={odd ? 'rgba(0, 23, 61, 0.95)' : 'rgba(69, 20, 117, 0.98)'}
				position='relative'
				borderRadius='5px'
				w='272px'
				flexShrink={0}
				h={isFirst ? `139px` : '128px'}
				overflow='hidden'
				px='20px'
				py='15px'
			>
				<Container h='full' centerContent>
					<Spinner />
				</Container>
			</Flex>
		);
	} else {
	}
	return (
		<Link to={`/books/${id}`}>
			<Flex
				bg={odd ? 'rgba(0, 23, 61, 0.95)' : 'rgba(69, 20, 117, 0.95)'}
				position='relative'
				borderRadius='5px'
				w='272px'
				flexShrink={0}
				h={isFirst ? `139px` : '128px'}
				overflow='hidden'
				px='20px'
				py='15px'
			>
				<VStack alignItems='flex-start' spacing='5px'>
					<Text
						fontSize='27px'
						textColor='#FEFEFE'
						zIndex={5}
						fontWeight='bold'
						mt='2px'
					>
						{title.substring(0, 7)}..
					</Text>
					<Text
						fontSize='14px'
						textColor='#FEFEFE'
						zIndex={5}
						fontWeight='normal'
						letterSpacing='1.28889px'
						mt='2px'
					>
						{authors ? authors[0] : 'Unknown'}
					</Text>
				</VStack>

				<Flex
					position='absolute'
					bottom='22px'
					left='20px'
					fontSize='10px'
					textColor='#FEFEFE'
					zIndex={5}
					fontWeight='400'
					letterSpacing='1.28889px'
					mt='2px'
					alignItems='center'
				>
					<Image src={miniGraph} w='16px' h='16px' />{' '}
					<span style={{ fontWeight: '700' }}>120+</span> Read now
				</Flex>
				<Image
					src={bgOval}
					style={{
						position: 'absolute',
						left: '49.94%',
						// right: '40.44%',
						top: '10.07%',
						bottom: '76.98%'
					}}
				/>
				<Oval
					style={{
						position: 'absolute',
						width: 46,
						height: 4,
						left: '53.37%',
						top: '68.7%',
						bottom: '28.42%',
						border: '#EC6374',
						backgroundColor: '#EC6374',
						transform: 'rotate(14deg)'
					}}
				/>
				<Image
					src={bgPath}
					style={{
						position: 'absolute',
						left: '61.95%',
						right: '25.97%',
						top: '2.73%',
						bottom: '76.97%'
					}}
				/>
				<Image
					src={image}
					w='72px'
					h='111px'
					borderRadius='5px'
					bg='green.400'
					ml='auto'
				/>
			</Flex>
		</Link>
	);
};

export { HomeSection, DiscoverBookCard };
