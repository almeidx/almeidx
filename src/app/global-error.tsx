"use client";

import { Providers } from "@/app/providers.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	console.error("An error occurred:", error);

	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<Providers>
					<div className="container mx-auto flex h-full min-h-screen flex-col bg-background px-4 text-foreground">
						<h2 className="text-xl">Something went wrong!</h2>
						<Button onClick={() => reset()} variant="outline">
							Try again
						</Button>
					</div>
				</Providers>
			</body>
		</html>
	);
}

interface GlobalErrorProps {
	error: Error & {
		digest?: string;
	};
	reset: () => void;
}
