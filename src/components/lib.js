import React from 'react';
import { Box } from '@chakra-ui/react';
import bgImage from '../assets/oval-5.png';

const Oval = ({ style, ...props }) => {
	return (
		<Box
			style={{
				position: 'absolute',
				width: 24,
				height: 24,
				left: 248,
				top: 86,
				border: '2px solid #4550A7',
				borderRadius: '100%',
				zIndex: '0',
				...style
			}}
			{...props}
		/>
	);
};

function BgOvals() {
	return (
		<React.Fragment>
			<Oval />
			<Oval
				style={{
					width: 63,
					height: 63,
					left: '19.5%',
					top: '14.4%',
					background: '#00173D'
				}}
			/>
			<Oval
				style={{
					width: 48,
					height: 48,
					left: '60%',
					top: '27%',
					background: `url(${bgImage})`,
					transform: 'rotate(25deg)'
				}}
			/>
			<Oval
				style={{
					width: 100,
					height: 100,
					left: '87%',
					top: '-4.5%',
					background: `url(${bgImage})`,
					transform: 'rotate(25deg)'
				}}
			/>
			<Oval
				style={{
					width: 15,
					height: 15,
					left: '12%',
					top: '15.5%',
					background: '#FF6978',
					border: 'none'
				}}
			/>
		</React.Fragment>
	);
}

export { BgOvals };
