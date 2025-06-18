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
				<ExternalLink className="text-black dark:text-foreground" href="https://github.com/almeidx">
					GitHub
				</ExternalLink>
				,{" "}
				<ExternalLink className="text-black dark:text-foreground" href="https://discord.com/users/385132696135008259">
					Discord
				</ExternalLink>
				, or via{" "}
				<ExternalLink className="text-black dark:text-foreground" href="mailto:root@almeidx.dev">
					email
				</ExternalLink>
				.
			</p>
		</div>
	);
}
