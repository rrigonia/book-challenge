import React from 'react';
import {
	Text,
	HStack,
	StackDivider,
	Heading,
	VStack,
	Stack,
	Container,
	Spinner,
	Flex
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { FiBookOpen, FiShare } from 'react-icons/fi';
import { BiHeadphone } from 'react-icons/bi';

function BookInfo ({ book, showError, error, isLoading, ...props }) {
	const { title, subTitle, authors, description } = book;
	return (
		<React.Fragment>
			<Stack mt='67px' {...props} w='full'>
				<Heading fontSize='xl' fontWeight='400'>
					<span style={{ fontWeight: '700' }}>{title}</span>{' '}
					{subTitle ? `:${subTitle}` : null}
				</Heading>
				<Text
					minH='19px'
					textColor='brand.seccondary'
					letterSpacing='0.670588px'
				>
					{authors?.map((author, idx) => (
						<span key={author}>
							{author}
							{idx < authors.length - 1 && ', '}
						</span>
					))}
					{!authors ? 'Unknown' : null}
				</Text>
			</Stack>
			<VStack
				fontSize='md'
				lineHeight='25px'
				spacing='20px'
				mt='10px'
				alignItems='flex-start'
				pb='20px'
				letterSpacing='0.2px'
				textColor='rgba(49,49,49,0.6)'
				w='full'
				h='235px'
				overflow='auto'
				{...props}
			>
				{isLoading ? (
					<Container centerContent>
						<Spinner size='md' />
					</Container>
				) : showError ? (
					<Flex alignItems='center' mt={15}>
						<FaTimes color='red' /> <Text px={2}>{error.message}</Text>
					</Flex>
				) : description ? (
					<Text>{description}</Text>
				) : (
					<Flex alignItems='center' mt={15}>
						<FaTimes color='red'/> <Text px={2}>This book do not contain any description!</Text>
					</Flex>
				)}
			</VStack>
		</React.Fragment>
	);
};
BookInfo = React.memo(BookInfo)

function BookActions () {
	return (
		<HStack
			w='335px'
			h='56px'
			bg='#fff'
			p='20px'
			position='absolute'
			bottom='53px'
			justifyContent='space-between'
			fontSize='md'
			fontWeight='bold'
			divider={<StackDivider borderColor='rgba(151, 151, 151, 0.2)' />}
		>
			<HStack>
				<FiBookOpen size='20px' color='#CFCBD2' /> <Text>Read</Text>
			</HStack>
			<HStack>
				<BiHeadphone size='20px' color='#CFCBD2' /> <Text>Listen</Text>
			</HStack>
			<HStack>
				<FiShare size='20px' color='#CFCBD2' /> <Text>Share</Text>
			</HStack>
		</HStack>
	);
};
BookActions = React.memo(BookActions)

export {BookInfo, BookActions}

