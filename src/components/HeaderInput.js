import React from 'react';
import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';
import * as styles from '../style/styles';

const HeaderInput = () => {
	return (
		<Box as='header' mt='50px' position='relative'>
			<InputGroup>
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
		</Box>
	);
};

export default HeaderInput;
