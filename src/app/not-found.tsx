import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<h2 className="text-xl">You seem lost...</h2>

			<p>
				Try one of the tabs above, or <Link href="/">go back home</Link>.
			</p>
		</div>
	);
}
