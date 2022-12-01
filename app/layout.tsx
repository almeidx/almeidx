import "../styles/global.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function RootLayout({ children }: { children: any }) {
	return (
		<html className={roboto.className} lang="en">
			<head>
				<link href="/manifest.json" rel="manifest" />
				<link href="/favicon.ico" rel="shortcut icon" />

				<meta content="Almeida, almeidx, web, developer" name="keywords" />
				<meta content="Almeida" name="title" />
				<meta content="Almeida" property="og:title" />
				<meta content="insert some cool text here" name="description" />
				<meta content="insert some cool text here" property="og:description" />
				<meta content="website" property="og:type" />

				<title>Almeida Portfolio</title>
			</head>

			<body className="grid h-screen min-h-screen place-items-center bg-gradient-to-b from-black to-gray-800 text-white">
				{children}
			</body>
		</html>
	);
}
