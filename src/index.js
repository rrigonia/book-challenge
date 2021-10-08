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

const queryClient = new QueryClient();

ReactDOM.render(
	<ErrorBoundary FallbackComponent={<div>Error </div>}>
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Router>
					<ColorModeScript initialColorMode='light' />
					<App />
				</Router>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ChakraProvider>
	</ErrorBoundary>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
