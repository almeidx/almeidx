import type { ComponentProps } from "react";

export function ExternalLink(props: ComponentProps<"a">) {
	return <a rel="noopener noreferrer" target="_blank" {...props} />;
}
