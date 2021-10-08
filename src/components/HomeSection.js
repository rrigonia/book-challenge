import React from 'react';
import { VStack, HStack, Text, Box, Flex, Image } from '@chakra-ui/react';
import { Oval } from './lib';
import bgPath from '../assets/path-2.png';
import bgOval from '../assets/Oval-1.png';
import bgOval2 from '../assets/Oval.png';
import miniGraph from '../assets/miniIcon-1.svg';

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
				overflow='hidden'
				flexWrap='nowrap'
			>
				{children}
			</HStack>
		</VStack>
	);
};

const DiscoverBookCard = () => {
	return (
		<Flex
			bg='rgba(0, 23, 61, 0.95)'
			position='relative'
			borderRadius='5px'
			w='272px'
			flexShrink={0}
			h='139px'
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
					Hooked
				</Text>
				<Text
					fontSize='14px'
					textColor='#FEFEFE'
					zIndex={5}
					fontWeight='normal'
					letterSpacing='1.28889px'
					mt='2px'
				>
					Nyr Eyal
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

			{/* <Oval
				style={{
					position: 'absolute',
					width: 100,
					height: 127,
					left: '-4.19%',
					top: '17.99%',
					border: 'none',
					zIndex: 0,
					background: `url(${bgOval2})`
				}}
			/> */}
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
			<Box w='72px' h='111px' borderRadius='5px' bg='green.400' ml='auto' />
		</Flex>
	);
};

export { HomeSection, DiscoverBookCard };
