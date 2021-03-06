import React from 'react';
import bgImage from '../assets/oval-5.png';

const Oval = ({ style, withImage, ...props }) => {
	return (
		<div
			style={{
				position: 'fixed',
				width: 24,
				height: 24,
				left: 248,
				top: 86,
				border: '2px solid #4550A7',
				borderRadius: '100%',
				zIndex: '0',
				background: withImage ? `url(${bgImage})` : null,
				...style
			}}
			{...props}
		/>
	);
};

function BgOvalsHome() {
	return (
		<React.Fragment>
			<Oval
				style={{
					width: 127,
					height: 127,
					left: '77.4%',
					top: '18.9%',
					border: 'none',
					background: `url(${bgImage})`
				}}
			/>
			<Oval
				style={{
					width: 127,
					height: 127,
					left: '7%',
					top: '23%',
					border: 'none',
					background: `url(${bgImage})`
				}}
			/>
		</React.Fragment>
	);
}

function BgOvals() {
	return (
		<React.Fragment>
			<Oval />
			<Oval
				style={{
					position: 'fixed',
					width: 63,
					height: 63,
					left: '19.5%',
					top: '14.4%',
					border: 'none',
					background: '#00173D'
				}}
			/>
			<Oval
				style={{
					position: 'fixed',
					width: 48,
					height: 48,
					left: '60%',
					top: '27%',
					border: 'none',
					background: `url(${bgImage})`,
					transform: 'rotate(25deg)'
				}}
			/>
			<Oval
				style={{
					position: 'fixed',
					width: 100,
					height: 100,
					left: '87%',
					top: '-4.5%',
					border: 'none',
					background: `url(${bgImage})`,
					transform: 'rotate(25deg)'
				}}
			/>
			<Oval
				style={{
					position: 'fixed',
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

export { BgOvals, Oval, BgOvalsHome };
