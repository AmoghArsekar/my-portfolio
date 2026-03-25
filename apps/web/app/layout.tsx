import './globals.css';

export const metadata = {
	title: 'My Portfolio',
	description: 'Simple Next.js portfolio app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
