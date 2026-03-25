'use client';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: #efeae4;
  }
`;

const theme = {
	colors: {
		primary: '#4a4637',
		white: '#e9eef1',
		background: '#efeae4',
	},
};

export default function ThemeClient({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
