import { ExternalLink } from "@/components/external-link.tsx";

const projects = [
	{
		description:
			"Lurkr Discord bot owner/developer. Automated leveling system, boosted user engagement. No paywalled features.",
		github: "https://github.com/almeidx/lurkr-website",
		title: "Lurkr",
		website: "https://lurkr.gg",
	},
	{
		description: "Active contributor and member, top Discord API library (JavaScript/TypeScript).",
		github: "https://github.com/discordjs/discord.js",
		title: "Discord.js",
		website: "https://discord.js.org",
	},
	{
		description: "One of the maintainers, Discord API TypeScript types. Ensures accuracy and type safety.",
		github: "https://github.com/discordjs/discord-api-types",
		title: "Discord API Types",
		website: "https://discord-api-types.dev",
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
						<ExternalLink className="text-black dark:text-foreground" href={project.website}>
							Visit Site
						</ExternalLink>

						<ExternalLink className="text-black dark:text-foreground" href={project.github}>
							GitHub
						</ExternalLink>
					</div>
				</div>
			))}
		</div>
	);
}
