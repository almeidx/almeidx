"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LucideMoon } from "./icons/moon.tsx";
import { LucideSun } from "./icons/sun.tsx";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button
				className="flex size-9 items-center justify-center rounded-md border border-[var(--border)] bg-transparent"
				aria-label="Toggle theme"
				type="button"
			>
				<span className="sr-only">Toggle theme</span>
				<LucideMoon className="size-4" />
			</button>
		);
	}

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="flex size-9 items-center justify-center rounded-md border border-border bg-transparent transition-colors hover:bg-muted"
			aria-label="Toggle theme"
			type="button"
		>
			<span className="sr-only">Toggle theme</span>
			{theme === "dark" ? <LucideSun className="size-4" /> : <LucideMoon className="size-4" />}
		</button>
	);
}
