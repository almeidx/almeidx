import { Button } from "@/components/ui/button.tsx";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-2">
			<h2 className="text-xl">You seem lost...</h2>
			<Button variant="outline" asChild>
				<Link href="/">Go back home</Link>
			</Button>
		</div>
	);
}
