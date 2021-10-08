import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			useErrorBoundary: true,
			staleTime: 5 * 60000
		},
		mutations: {
			useErrorBoundary: true
		}
	}
});

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<QueryClientProvider client={queryClient}>
			<Router>
				<ColorModeScript initialColorMode='light' />
				<ErrorBoundary FallbackComponent={<div>Error </div>}>
					<App />
				</ErrorBoundary>
			</Router>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</ChakraProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
