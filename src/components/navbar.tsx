import { ThemeToggle } from "@/components/theme-toggle.tsx";

export function Navbar() {
	return (
		<header className="flex flex-col gap-1 py-8">
			<div className="flex justify-between">
				<h1 className="font-bold text-4xl">Almeida</h1>
				<ThemeToggle />
			</div>
			<p className="text-balance text-muted-foreground text-xl">Computer Science Graduate | Open Source Contributor</p>
		</header>
	);
}
