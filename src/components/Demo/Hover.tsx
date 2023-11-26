import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export const Hover = () => (
	<HoverCard>
		<HoverCardTrigger>Hover</HoverCardTrigger>
		<HoverCardContent>
			The React Framework – created and maintained by @vercel.
		</HoverCardContent>
	</HoverCard>
);
