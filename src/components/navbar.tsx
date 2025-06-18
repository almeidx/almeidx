"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle.tsx";

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
					className={clsx(
						"cursor-pointer hover:text-muted-foreground",
						pathname === "/"
							? "text-foreground hover:text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
					href="/"
				>
					about
				</Link>

				<Link
					className={clsx(
						"cursor-pointer",
						pathname === "/projects"
							? "text-foreground hover:text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
					href="/projects"
				>
					projects
				</Link>
			</nav>
		</header>
	);
}
