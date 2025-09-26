import { ExternalLink } from "@/components/external-link.tsx";

const projects = [
	{
		description: "Owner and developer of the leveling bot with no paywalls",
		github: "https://github.com/almeidx/lurkr-website",
		title: "Lurkr",
		website: "https://lurkr.gg",
	},
	{
		description: "Contributor to the leading Discord bot library for JavaScript/TypeScript",
		github: "https://github.com/discordjs/discord.js",
		title: "Discord.js",
		website: "https://discord.js.org",
	},
	{
		description: "Maintainer of TypeScript definitions for the Discord API",
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
