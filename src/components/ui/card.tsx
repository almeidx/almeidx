import { cn } from "@/lib/utils.ts";
import type { ComponentProps } from "react";

function Card({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card"
			className={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="card-header" className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />;
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div data-slot="card-title" className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
	);
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="card-content" className={cn("p-6 pt-0", className)} {...props} />;
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="card-footer" className={cn("flex items-center p-6 pt-0", className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
