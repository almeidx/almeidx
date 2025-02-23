"use client";

import { ExternalLink } from "@/components/external-link.tsx";
import { GitHubIcon } from "@/components/icons/github-icon.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { motion } from "motion/react";

export function ProjectCard({ gradient, title, description, link, github }: ProjectCardProps) {
	return (
		<motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
			<Card className="flex h-full flex-col border-black/10 dark:border-white/10 dark:bg-black/40">
				<CardHeader>
					<CardTitle className="text-xl">
						<span
							className={`bg-gradient-to-r uppercase ${gradient} animate-gradient bg-[length:200%_100%] bg-clip-text font-bold text-transparent`}
						>
							{title}
						</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="h-full">
					<p className="text-gray-400">{description}</p>
				</CardContent>
				<CardFooter className="flex flex-wrap items-center gap-2 self-start">
					<Button variant="outline" asChild>
						<ExternalLink href={link}>
							<ExternalLinkIcon className="mr-2 h-4 w-4" />
							Visit
						</ExternalLink>
					</Button>
					<Button variant="outline" asChild>
						<ExternalLink href={github}>
							<GitHubIcon className="mr-2 h-4 w-4 fill-black dark:fill-white" />
							Source Code
						</ExternalLink>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

interface ProjectCardProps {
	readonly gradient: string;
	readonly title: string;
	readonly description: string;
	readonly link: string;
	readonly github: string;
}
