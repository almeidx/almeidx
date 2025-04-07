import { ExternalLink } from "@/components/external-link.tsx";

export default function Home() {
	return (
		<div>
			<p className="mb-6 max-w-prose text-foreground dark:text-gray-300">
				Computer Science professional, Bachelor's degree, currently pursuing Master's. Passionate about software
				development and open-source, full-stack development with TypeScript, Node.js, and React.js.
			</p>

			<p className="text-foreground dark:text-gray-300">
				You can find me on{" "}
				<ExternalLink href="https://github.com/almeidx" className="text-black dark:text-foreground">
					GitHub
				</ExternalLink>
				,{" "}
				<ExternalLink href="https://discord.com/users/385132696135008259" className="text-black dark:text-foreground">
					Discord
				</ExternalLink>
				, or via{" "}
				<ExternalLink href="mailto:root@almeidx.dev" className="text-black dark:text-foreground">
					email
				</ExternalLink>
				.
			</p>
		</div>
	);
}
