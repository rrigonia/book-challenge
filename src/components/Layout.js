import React from 'react';
import { VStack } from '@chakra-ui/react';
import * as styles from '../style/styles';

const Layout = props => {
	return (
		<VStack
			spacing='30px'
			// px='20px'
			bg='#F2F2F2'
			h='100vh'
			alignItems='center'
			w='100vw'
			textColor={styles.colors.text.primary}
			letterSpacing='0.5px'
			fontSize='18px'
			fontWeight='600'
			lineHeight='21px'
			overflow='hidden'
			{...props}
		/>
	);
};

export default Layout;
