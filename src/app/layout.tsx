import "@/app/globals.css";

import type { PropsWithChildren } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Providers } from "@/app/providers.tsx";
import { Navbar } from "@/components/navbar.tsx";

export const metadata = {
	description: "Computer Science graduate and open source contributor",
	title: "Almeida - Portfolio",
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<Providers>
					<div className="mx-auto flex h-full min-h-screen max-w-prose flex-col bg-background px-4 py-8 text-foreground">
						<Navbar />

						<ViewTransition name="crossfade">{children}</ViewTransition>
					</div>
				</Providers>
			</body>
		</html>
	);
}
