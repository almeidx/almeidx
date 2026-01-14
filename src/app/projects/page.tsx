import { ExternalLink } from "@/components/external-link.tsx";

const featuredProjects = [
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

const otherProjects = [
	{
		description: "Compare versions of npm packages and WordPress plugins with a visual diff viewer",
		github: "https://github.com/almeidx/diff",
		title: "Diff",
		website: "https://diff.almeidx.dev",
	},
	{
		description: "A browser-based TypeScript/JavaScript REPL powered by WebContainers",
		github: "https://github.com/almeidx/repl",
		title: "REPL",
		website: "https://repl.almeidx.dev",
	},
] as const;

function ProjectCard({
	project,
}: {
	project: { description: string; github: string; title: string; website: string };
}) {
	return (
		<div className="space-y-3">
			<h3 className="text-lg">{project.title}</h3>

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
	);
}

export default function Projects() {
	return (
		<div className="space-y-10">
			<section className="space-y-6">
				<h2 className="font-medium text-xl">Featured</h2>

				<div className="space-y-8">
					{featuredProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="font-medium text-xl">Other Projects</h2>

				<div className="space-y-8">
					{otherProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</section>
		</div>
	);
}
