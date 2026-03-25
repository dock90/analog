import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Analog - The simplest productivity system',
	description:
		'Analog is a physical companion for your digital tools that helps you prioritize and focus on your most important tasks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='stylesheet'
					href='https://use.typekit.net/zss2etu.css'
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
