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
	Flex,
	Button
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { FiBookOpen, FiShare } from 'react-icons/fi';
import { BiHeadphone } from 'react-icons/bi';
import { useHistory } from 'react-router';

function BookInfo({ book, showError, error, isLoading, ...props }) {
	const { title, subtitle, authors, description } = book;
	const history = useHistory();

	if (showError) {
		return (
			<React.Fragment>
				<Stack mt='67px' textAlign='center' {...props} w='full' h='full'>
					<Heading fontSize='min(3vh, 8vw)' fontWeight='700'>
						{error.message} :(
					</Heading>
					<Flex
						justifyContent='center'
						alignItems='center'
						pt='min(2.5vh, 7vw)'
					>
						<Button
							colorScheme='gray'
							bg='gray.300'
							fontSize='min(2.5vh, 7vw)'
							p={5}
							onClick={() => history.push('/books')}
						>
							Search
						</Button>
					</Flex>
				</Stack>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<Stack mt='67px' {...props} w='full'>
				<Heading fontSize='min(3vh, 8vw)' fontWeight='400'>
					<span style={{ fontWeight: '700' }}>{title}</span>{' '}
					{subtitle ? ': ' : null } {subtitle ? <span>{subtitle}</span> : null}
				</Heading>
				<Text
					minH='19px'
					textColor='brand.seccondary'
					fontSize='min(2.5vh, 7vw)'
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
				fontSize='min(2vh, 7vw)'
				lineHeight='25px'
				spacing='20px'
				mt={[ '10px', '25px' ]}
				alignItems='flex-start'
				pb='50px'
				letterSpacing='0.2px'
				textColor='rgba(49,49,49,0.6)'
				w='full'
				h='27vh'
				overflow='auto'
				{...props}
			>
				{isLoading ? (
					<Container centerContent>
						<Spinner size='md' />
					</Container>
				) : description ? (
					<Text pb='20px'>{description}</Text>
				) : (
					<Flex alignItems='center' mt={15}>
						<FaTimes color='red' />{' '}
						<Text px={2}>This book do not contain any description!</Text>
					</Flex>
				)}
			</VStack>
		</React.Fragment>
	);
}
BookInfo = React.memo(BookInfo);

function BookActions() {
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
}
BookActions = React.memo(BookActions);

export { BookInfo, BookActions };
