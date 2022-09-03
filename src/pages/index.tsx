import Link from "next/link";
import { SiDiscord, SiGithub } from "react-icons/si";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<section className="my-12 w-2/6">
				<div className="my-2 flex gap-x-4 text-lg content-none">
					<Link href="https://github.com/almeidx">
						<a className="duration-150 hover:opacity-70">
							<SiGithub />
						</a>
					</Link>

					<Link href="https://discord.com/users/385132696135008259">
						<a className="duration-150 hover:opacity-70">
							<SiDiscord />
						</a>
					</Link>
				</div>
				<h1 className="text-2xl font-medium">Almeida</h1>
				<p className="opacity-75">College student and hobbyist developer.</p>
			</section>

			<div className="w-2/6">
				<p className="text-gray-500">// TODO: Fill up this page</p>
			</div>
		</div>
	);
}
