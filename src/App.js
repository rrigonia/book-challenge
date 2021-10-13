import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'react-router';
import DiscoverFallback from './components/DiscoverFallback';
import ShowBookFallback from './components/ShowBookFallback';
import Layout from './components/Layout';
import Profile from './screens/Profile';
import Home from './screens/Home';
import NotFound404 from './components/NotFound404';
const user = { name: 'Mehmed Al Fatih', imageProfile: '' };

const Discover = React.lazy(() =>
	import(/* webpackPrefetch: true */ './screens/Discover')
);
const ShowBook = React.lazy(() =>
	import(/* webpackPrefetch: true */ './screens/ShowBook')
);

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

function App() {
	// const { toggleColorMode, colorMode } = useColorMode();
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			{' '}
			<AppRoutes />
		</ErrorBoundary>
	);
}

const AppRoutes = () => {
	const [ query, setQuery ] = React.useState(false);
	const [ queried, setQueried ] = React.useState(false);
	const searchProps = { query, setQuery, queried, setQueried };
	return (
		<Switch>
			<Route exact path='/' render={() => <Home user={user} />} />
			<Route
				exact
				path='/books'
				render={() => (
					<React.Suspense fallback={<DiscoverFallback />}>
						<Discover {...searchProps} />
					</React.Suspense>
				)}
			/>
			<Route
				exact
				path='/books/:bookId'
				render={() => (
					<React.Suspense fallback={<ShowBookFallback />}>
						<ShowBook {...searchProps} />
					</React.Suspense>
				)}
			/>
			<Route
				exact
				path='/profile/:profileId'
				render={() => (
					<React.Suspense fallback={<div>Loading Profile...</div>}>
						<Profile user={user} />
					</React.Suspense>
				)}
			/>
			<Route render={() => <NotFound404 />} />
		</Switch>
	);
};

export default App;
