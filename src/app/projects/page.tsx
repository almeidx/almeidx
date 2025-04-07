import { ExternalLink } from "@/components/external-link.tsx";

const projects = [
	{
		title: "Lurkr",
		description:
			"Lurkr Discord bot owner/developer. Automated leveling system, boosted user engagement. No paywalled features.",
		website: "https://lurkr.gg",
		github: "https://github.com/almeidx/lurkr-website",
	},
	{
		title: "Discord.js",
		description: "Active contributor and member, top Discord API library (JavaScript/TypeScript).",
		website: "https://discord.js.org",
		github: "https://github.com/discordjs/discord.js",
	},
	{
		title: "Discord API Types",
		description: "One of the maintainers, Discord API TypeScript types. Ensures accuracy and type safety.",
		website: "https://discord-api-types.dev",
		github: "https://github.com/discordjs/discord-api-types",
	},
] as const;

export default function Projects() {
	return (
		<div className="space-y-8">
			{projects.map((project) => (
				<div className="space-y-3" key={project.title}>
					<h2 className="text-lg">{project.title}</h2>

					<p className="max-w-prose text-foreground dark:text-gray-300">{project.description}</p>

					<div className="space-x-4 text-sm">
						<ExternalLink href={project.website} className="text-black dark:text-foreground">
							Visit Site
						</ExternalLink>

						<ExternalLink href={project.github} className="text-black dark:text-foreground">
							GitHub
						</ExternalLink>
					</div>
				</div>
			))}
		</div>
	);
}
