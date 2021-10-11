import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import HeaderInput from '../components/HeaderInput';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Profile = ({ user }) => {
	return (
		<Layout px='20px'>
			<HeaderInput />
			<Heading
				lineHeight='28,64px'
				fontSize='xl'
				fontWeight='normal'
				alignSelf='flex-start'
			>
				Hi,{' '}
				<Text display='inline' fontWeight='600' textColor='brand.seccondary'>
					{user.name} 👋
				</Text>
			</Heading>

			<Footer />
		</Layout>
	);
};

export default Profile;
