import React from 'react';
import { Flex, Text, Spinner } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { BgOvals } from '../components/lib';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const ShowBookFallback = () => {
	return (
		<Layout spacing={null}>
			<Text
				style={{
					position: 'absolute',
					width: 7,
					height: 14,
					left: '9%',
					top: '7%',
					color: 'black',
					padding: '8px',
					cursor: 'pointer'
				}}
			>
				<HiArrowNarrowLeft />
			</Text>
			<Flex
				w='full'
				justifyContent='center'
				h='282px'
				borderRadius='0px 0px 100px 0px'
				bg='#FFF6E5'
			/>
			<BgOvals />
			<Spinner />
		</Layout>
	);
};

export default ShowBookFallback;
