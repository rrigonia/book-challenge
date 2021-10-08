import React from 'react';
import * as styles from '../style/styles';
import {
	Text,
	HStack,
	StackDivider,
	Heading,
	VStack,
	Stack,Container, Spinner
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { FiBookOpen, FiShare } from 'react-icons/fi';
import { BiHeadphone } from 'react-icons/bi';

export const BookInfo = ({ book,showError, error,isLoading, ...props }) => {
	const {title, subTitle, authors,description} = book;
	return (
		<React.Fragment>
			<Stack mt='67px' {...props} w='full'>
				<Heading fontSize='24px' fontWeight='400'>
					<span style={{ fontWeight: '700' }}>{title}</span> {subTitle ? `:${subTitle}` : null}
				</Heading>
				<Text
					h='19px'
					textColor={styles.colors.text.seccondary}
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
				fontSize='14px'
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
				{isLoading ? <Container centerContent><Spinner size='md'/></Container> : showError ? <Text><FaTimes color='red' /> {error.message}</Text> : <Text>{description}</Text>}

			</VStack>
		</React.Fragment>
	);
};

export const BookActions = () => {
	return (
		<HStack
			w='335px'
			h='56px'
			bg='#fff'
			p='20px'
			position='absolute'
			bottom='53px'
			justifyContent='space-between'
			fontSize='14px'
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
