import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { SiGithub, SiDiscord, SiSteam } from "react-icons/si";

export default function Page() {
	return (
		<div className="max-w-2xl flex-col items-center justify-center px-4">
			<header>
				<h1 className="text-4xl font-medium hover:animate-pulse">Almeida</h1>

				<p className="text-xl font-light text-gray-400">College student and hobbyist developer</p>
			</header>

			<div className="mt-4 flex gap-3 text-lg text-gray-300">
				<Link className="duration-150 hover:text-gray-400" href="mailto:root@almeidx.dev">
					<MdAlternateEmail size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://github.com/almeidx">
					<SiGithub size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://discord.com/users/385132696135008259">
					<SiDiscord size={30} />
				</Link>

				<Link className="duration-150 hover:text-gray-400" href="https://steamcommunity.com/id/almeidx_/">
					<SiSteam size={30} />
				</Link>
			</div>
		</div>
	);
}
