import { Route, Switch } from 'react-router';
import Discover from './screens/Discover';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ShowBook from './screens/ShowBook';
// import { useColorMode } from '@chakra-ui/react';

function App() {
	// const { toggleColorMode, colorMode } = useColorMode();
	return <AppRoutes />;
}

const AppRoutes = () => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/books' render={() => <Discover />} />
			<Route exact path='/books/:bookId' render={() => <ShowBook />} />
			<Route exact path='/profile/:profileId' render={() => <Profile />} />
		</Switch>
	);
};

export default App;
