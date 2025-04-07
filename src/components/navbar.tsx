"use client";

import { ThemeToggle } from "@/components/theme-toggle.tsx";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="flex flex-col gap-1 py-8">
			<header className="flex items-center justify-between py-4">
				<h1 className="font-bold text-4xl">Almeida</h1>

				<ThemeToggle />
			</header>

			<nav className="flex gap-2">
				<Link
					href="/"
					className={clsx(
						"cursor-pointer hover:text-muted-foreground",
						pathname === "/"
							? "text-foreground hover:text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					about
				</Link>

				<Link
					href="/projects"
					className={clsx(
						"cursor-pointer",
						pathname === "/projects"
							? "text-foreground hover:text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					projects
				</Link>
			</nav>
		</header>
	);
}
