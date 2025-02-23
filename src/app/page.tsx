import { ExternalLink } from "@/components/external-link.tsx";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { ProjectCard } from "@/components/project-card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Mail } from "lucide-react";

export default async function Home() {
	return (
		<main className="flex flex-col gap-12 pt-4 pb-8">
			<section>
				<h2 className="mb-4 font-semibold text-2xl">About Me</h2>
				<div className="space-y-4 text-muted-foreground">
					<p className="max-w-prose">
						Computer Science professional, Bachelor's degree, currently pursuing Master's. Passionate about software
						development and open-source, full-stack development with TypeScript, Node.js, and React.js.
					</p>
				</div>
			</section>

			<section>
				<h2 className="mb-4 font-semibold text-2xl">Projects & Contributions</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					<ProjectCard
						gradient="from-yellow-400 via-orange-400 to-pink-400"
						title="Lurkr"
						description="Lurkr Discord bot owner/developer. Automated leveling system, boosted user engagement. No paywalled features."
						link="https://lurkr.gg"
						github="https://github.com/almeidx/lurkr-website"
					/>
					<ProjectCard
						title="Discord.js"
						gradient="from-indigo-400 via-purple-400 to-indigo-600"
						description="Active contributor and member, top Discord API library (JavaScript/TypeScript)."
						link="https://discord.js.org"
						github="https://github.com/discordjs/discord.js"
					/>
					<ProjectCard
						gradient="from-purple-400 via-pink-400 to-blue-400"
						title="Discord API Types"
						description="One of the maintainers, Discord API TypeScript types. Ensures accuracy and type safety."
						link="https://discord-api-types.dev"
						github="https://github.com/discordjs/discord-api-types"
					/>
				</div>
			</section>

			<section>
				<h2 className="mb-4 font-semibold text-2xl">Get in Touch</h2>
				<div className="flex flex-wrap gap-4">
					<Button variant="outline" asChild>
						<ExternalLink href="https://discord.com/users/385132696135008259">
							<DiscordIcon className="fill-blurple" /> Discord
						</ExternalLink>
					</Button>
					<Button variant="outline" asChild>
						<ExternalLink href="https://github.com/almeidx">
							<GitHubIcon className="fill-black dark:fill-white" /> GitHub
						</ExternalLink>
					</Button>
					<Button variant="outline" asChild>
						<ExternalLink href="mailto:root@almeidx.dev">
							<Mail /> Email
						</ExternalLink>
					</Button>
				</div>
			</section>
		</main>
	);
}
