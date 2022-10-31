import "../styles/global.css";
import { Roboto } from "@next/font/google";

const roboto_300 = Roboto({ subsets: ["latin"], weight: "300" });
const roboto_400 = Roboto({ subsets: ["latin"], weight: "400" });
const roboto_500 = Roboto({ subsets: ["latin"], weight: "500" });

export default function RootLayout({ children }: { children: any }) {
	return (
		<html className={`${roboto_300.className} ${roboto_400.className} ${roboto_500.className}`} lang="en">
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

			<body className="min-h-screen from-black to-gray-800 bg-gradient-to-b text-white grid h-screen place-items-center">
				{children}
			</body>
		</html>
	);
}