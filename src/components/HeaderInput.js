import React from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';

const HeaderInput = ({ props }) => {
	return (
		<InputGroup mt='50px' {...props}>
			<InputLeftElement
				pointerEvents='none'
				children={<RiSearch2Line color='#DCD8D8' />}
			/>
			<Input
				w='336px'
				type='search'
				placeholder='Search book'
				textColor='black'
			/>
		</InputGroup>
	);
};

export default HeaderInput;
