import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html className="h-full antialiased" lang="en">
			<Head></Head>
			<body className="flex h-full flex-col bg-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
