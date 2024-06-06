import Link from "next/link";
import type { IconType } from "react-icons";
import { MdAlternateEmail } from "react-icons/md";
import { SiDiscord, SiGithub, SiSteam } from "react-icons/si";

const socials = [
	{
		ariaLabel: "Contact by email",
		href: "mailto:root@almeidx.dev",
		Icon: MdAlternateEmail,
	},
	{
		ariaLabel: "View GitHub profile",
		href: "https://github.com/almeidx",
		Icon: SiGithub,
	},
	{
		ariaLabel: "View Discord profile",
		href: "https://discord.com/users/385132696135008259",
		Icon: SiDiscord,
	},
	{
		ariaLabel: "View Steam profile",
		href: "https://steamcommunity.com/id/almeidx_/",
		Icon: SiSteam,
	},
] as const satisfies readonly { Icon: IconType; ariaLabel: string; href: string }[];

export default function Page() {
	return (
		<div className="max-w-2xl flex-col items-center justify-center px-4">
			<header>
				<h1 className="text-4xl font-medium hover:animate-pulse">Almeida</h1>
				<p className="text-xl font-light text-gray-400">Computer Science undergradute</p>
			</header>

			<div className="mt-4 flex gap-3 text-lg text-gray-300">
				{socials.map(({ ariaLabel, href, Icon }) => (
					<Link aria-label={ariaLabel} className="transition-colors hover:text-gray-400" href={href} key={href}>
						<Icon size={30} />
					</Link>
				))}
			</div>
		</div>
	);
}
