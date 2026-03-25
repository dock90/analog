import StyledComponentsRegistry from './registry';
import ThemeClient from './theme';

export const metadata = {
	title: 'Analog - The simplest productivity system',
	description:
		'Analog is a physical companion for your digital tools that helps you prioritize and focus on your most important tasks.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/zss2etu.css'
				/>
			</head>
			<body>
				<StyledComponentsRegistry>
					<ThemeClient>{children}</ThemeClient>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
