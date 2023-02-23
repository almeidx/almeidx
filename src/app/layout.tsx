import "../styles/global.css";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className={roboto.className} lang="en">
			<head>
				<link href="/manifest.json" rel="manifest" />
				<link href="/favicon.ico" rel="shortcut icon" />
			</head>

			<body className="grid h-screen min-h-screen place-items-center bg-gradient-to-b from-black to-gray-800 text-white">
				{children}
			</body>
		</html>
	);
}

export const metadata = {
	title: "Almeida",
	description: "insert some cool text here",
	keywords: ["Almeida", "almeidx", "web", "developer"],
};
