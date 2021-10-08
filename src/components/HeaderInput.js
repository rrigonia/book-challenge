import React from 'react';
import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';

const HeaderInput = ({ props }) => {
	return (
		<InputGroup mt='50px'>
			<InputLeftElement
				pointerEvents='none'
				children={<RiSearch2Line color='#DCD8D8' />}
			/>
			<Input
				w='336px'
				type='search'
				placeholder='Search book'
				textColor='black'
				{...props}
			/>
		</InputGroup>
	);
};

export default HeaderInput;
