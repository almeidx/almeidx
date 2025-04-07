import "@/app/globals.css";

import { Providers } from "@/app/providers.tsx";
import { Navbar } from "@/components/navbar.tsx";
import type { PropsWithChildren } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata = {
	title: "Almeida - Portfolio",
	description: "Computer Science graduate and open source contributor",
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<Providers>
					<div className="mx-auto my-8 flex h-full min-h-screen max-w-prose flex-col bg-background px-4 text-foreground">
						<Navbar />

						<ViewTransition name="crossfade">{children}</ViewTransition>
					</div>
				</Providers>
			</body>
		</html>
	);
}
