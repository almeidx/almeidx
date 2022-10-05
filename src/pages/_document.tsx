import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	public override render() {
		return (
			<Html lang="en">
				<Head>
					<link href="/manifest.json" rel="manifest" />
					<link href="/favicon.ico" rel="shortcut icon" />

					<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />

					<meta content="#ffffff" name="theme-color" />
					<meta content="Almeida, almeidx, web, developer" name="keywords" />
					<meta content="Almeida" name="title" />
					<meta content="Almeida" property="og:title" />
					<meta content="insert some cool text here" name="description" />
					<meta content="insert some cool text here" property="og:description" />
					<meta content="website" property="og:type" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
