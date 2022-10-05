import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { SiDiscord, SiGithub, SiSteam } from "react-icons/si";

export default function Home() {
	return (
		<main className="grid h-screen place-items-center">
			<div className="max-w-2xl flex-col items-center justify-center px-4">
				<header>
					<h1 className="w-fit bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-4xl font-medium text-transparent hover:animate-pulse">
						Almeida
					</h1>
					<p className="text-xl font-light text-gray-400">College student and hobbyist developer</p>
				</header>

				<div className="mt-4 flex gap-3 text-lg text-gray-300">
					<Link href="mailto:root@almeidx.dev">
						<a className="duration-150 hover:text-gray-400">
							<MdAlternateEmail size={30} />
						</a>
					</Link>

					<Link href="https://github.com/almeidx">
						<a className="duration-150 hover:text-gray-400">
							<SiGithub size={30} />
						</a>
					</Link>

					<Link href="https://discord.com/users/385132696135008259">
						<a className="duration-150 hover:text-gray-400">
							<SiDiscord size={30} />
						</a>
					</Link>

					<Link href="https://steamcommunity.com/id/almeidx_/">
						<a className="duration-150 hover:text-gray-400">
							<SiSteam size={30} />
						</a>
					</Link>
				</div>
			</div>
		</main>
	);
}
