import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Dropdown = () => (
	<DropdownMenu>
		<DropdownMenuTrigger>Open</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuItem>Profile</DropdownMenuItem>
			<DropdownMenuItem>Billing</DropdownMenuItem>
			<DropdownMenuItem>Team</DropdownMenuItem>
			<DropdownMenuItem>Subscription</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
);
