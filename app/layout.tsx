import "@/global.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { PropsWithChildren } from "react";

const roboto = Roboto({
	weight: ["300", "400", "500"],
	style: "normal",
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} scroll-smooth font-sans antialiased grid min-h-screen place-items-center bg-gradient-to-b from-black to-gray-800 text-white`}
			>
				{children}
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Almeida",
	description: "insert some cool text here",
	keywords: ["Almeida", "almeidx", "web", "developer"],
};
