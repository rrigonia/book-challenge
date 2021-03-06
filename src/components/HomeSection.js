import React from 'react';
import {
	VStack,
	HStack,
	Text,
	Flex,
	Image,
	Box,
	Spinner
} from '@chakra-ui/react';
import { Oval } from './lib';
import bgPath from '../assets/path-2.png';
import bgOval from '../assets/Oval-1.png';
import ovalReading from '../assets/oval-reading.png';
import rectangle from '../assets/rectangle.png';
import miniGraph from '../assets/miniIcon-1.svg';
import bookPlaceholder from '../assets/book-placeholder.svg';
import bigOvalReading from '../assets/big-oval-reading.png';
import { Link } from 'react-router-dom';
import smallBook from '../assets/smallbook.svg';

const HomeSection = ({ title, link, children, last, ...props }) => {
	return (
		<VStack
			as='section'
			w='full'
			zIndex='5'
			spacing={0}
			alignItems='flex-start'
			{...props}
		>
			<HStack w='full' mb='15px' justifyContent='space-between'>
				<Text>{title}</Text>
				<Text textColor='#4ABDF1' fontSize='md'>
					{link}
				</Text>
			</HStack>
			<HStack
				w='full'
				justifyContent='flex-start'
				overflow='auto'
				flexWrap='nowrap'
				mb={last ? '69px !important' : '0'}
			>
				{children}
			</HStack>
		</VStack>
	);
};
const ReadingSection = ({ title, link, children, ...props }) => {
	return (
		<VStack as='section' w='full' zIndex='5' alignItems='flex-start' {...props}>
			<HStack w='full' mb='15px' justifyContent='space-between' px='20px'>
				<Text>{title}</Text>
				<Text textColor='#4ABDF1' fontSize='md'>
					{link}
				</Text>
			</HStack>
			<HStack
				w='full'
				justifyContent='flex-start'
				overflow='auto'
				flexWrap='nowrap'
				height='150px'
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
				bg={odd ? 'rgba(0, 23, 61, 0.95)' : 'rgba(69, 20, 117, 0.95)'}
				position='relative'
				borderRadius='5px'
				w='272px'
				flexShrink={0}
				h={isFirst ? `139px` : '128px'}
				overflow='hidden'
				alignItems='center'
				justifyContent='center'
				px='20px'
				py='15px'
			>
				<Spinner />
			</Flex>
		);
	} else {
	}
	return (
		<Link to={`/books/${id}`}>
			<Flex
				bg={odd ? 'rgba(0, 23, 61, 0.95)' : 'rgba(69, 20, 117, 0.9)'}
				position='relative'
				borderRadius='5px'
				w='272px'
				flexShrink={0}
				h={isFirst ? `139px` : '128px'}
				overflow='hidden'
				px='20px'
				py='15px'
				data-testid={`discover-${idx}`}
			>
				<VStack
					alignItems='flex-start'
					spacing='5px'
					zIndex={5}
					mt='2px'
					textColor='#FEFEFE'
				>
					<Flex h='36px' alignItems='center'>
						<Text fontSize='2xl' fontWeight='bold' data-testid={`discover-title-${idx}`}>
							{title.substring(0, 7)}..
						</Text>
					</Flex>
					<Flex h='16px' alignItems='center'>
						<Text
							fontSize='md'
							textColor='#E7E7E1'
							fontWeight='normal'
							letterSpacing='1.28889px'
							fontStyle='italic'
						>
							{authors ? authors[0] : 'Unknown'}
						</Text>
					</Flex>
				</VStack>

				<Flex
					position='absolute'
					bottom='22px'
					left='20px'
					fontSize='sm'
					textColor='#FEFEFE'
					zIndex={5}
					fontWeight='400'
					letterSpacing='1.28889px'
					mt='2px'
					alignItems='center'
				>
					<Image src={miniGraph} w='16px' h='16px' />{' '}
					<Text ml='5px'>
						<span style={{ fontWeight: '700' }}>120+</span> Read now
					</Text>
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
					h={isFirst ? '111px' : '100px'}
					borderRadius='5px'
					bg='green.400'
					ml='auto'
				/>
			</Flex>
		</Link>
	);
};

const ReadingBook = ({ id, volumeInfo, loading }) => {
	const { title, authors, imageLinks } = volumeInfo;
	const image = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? bookPlaceholder;

	if (loading) {
		return (
			<Flex
				alignItems='center'
				bg='#EEF5DB'
				w='331px'
				position='relative'
				textColor='black'
				flexShrink={0}
				h='100px'
				py='10px'
				px='20px'
			>
				<Spinner />
			</Flex>
		);
	}
	return (
		<Link to={`/books/${id}`}>
			<Flex
				alignItems='center'
				bg='#EEF5DB'
				w='331px'
				position='relative'
				textColor='black'
				flexShrink={0}
				h='100px'
				py='10px'
				px='20px'
			>
				<Image w='91px' h='136px' src={image} borderRadius='5px' />
				<VStack ml='8px' alignItems='space-between' alignSelf='flex-start'>
					<VStack alignItems='flex-start' spacing='5px'>
						<Text fontSize='20px' zIndex={5} fontWeight='700'>
							{title.substring(0, 7)}..
						</Text>
						<Text fontSize='sm' zIndex={5} fontWeight='400'>
							by {authors ? authors[0] : 'Unknown'}
						</Text>
					</VStack>
					<Flex
						fontSize='sm'
						zIndex={5}
						fontWeight='400'
						letterSpacing='0.020635px'
						alignItems='center'
					>
						<Image src={smallBook} w='16px' h='16px' />{' '}
						<Text ml='5px'>
							Chapter{' '}
							<Text as='span' textColor='brand.seccondary'>
								{' '}
								2{' '}
							</Text>{' '}
							from 9
						</Text>
					</Flex>
				</VStack>
				<ReadingMask />
			</Flex>
		</Link>
	);
};

function ReadingMask() {
	return (
		<Box position='absolute' w='full' ml='-20px' h='full' overflow='hidden'>
			<Image
				src={ovalReading}
				style={{
					position: 'absolute',
					left: '223px',
					top: '-9%'
				}}
			/>
			<Image
				src={bigOvalReading}
				style={{
					position: 'absolute',
					left: '295px',
					top: '-25%'
				}}
			/>
			<Image
				src={rectangle}
				style={{
					position: 'absolute',
					left: '309.17px',
					top: '60%'
				}}
			/>
		</Box>
	);
}

export { HomeSection, DiscoverBookCard, ReadingBook, ReadingSection };
