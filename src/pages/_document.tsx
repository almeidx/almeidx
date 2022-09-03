import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	public override render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="shortcut icon" href="/favicon.ico" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

					<meta name="theme-color" content="#ffffff" />
					<meta name="keywords" content="Almeida, almeidx, web, developer" />
					<meta name="title" content="Almeida" />
					<meta property="og:title" content="Almeida" />
					<meta name="description" content="insert some cool text here" />
					<meta property="og:description" content="insert some cool text here" />
					<meta property="og:type" content="website" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
