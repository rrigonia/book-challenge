import React from 'react';
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
	const [ query, setQuery ] = React.useState(false);
	const [ queried, setQueried ] = React.useState(false);
	const searchProps = { query, setQuery, queried, setQueried };
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/books' render={() => <Discover {...searchProps} />} />
			<Route
				exact
				path='/books/:bookId'
				render={() => <ShowBook {...searchProps} />}
			/>
			<Route exact path='/profile/:profileId' render={() => <Profile />} />
		</Switch>
	);
};

export default App;
