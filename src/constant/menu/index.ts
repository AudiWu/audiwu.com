type NavItem = {
	id: number;
	value: string;
	href: string;
};

export const navItems: NavItem[] = [
	{
		id: 1,
		value: "About",
		href: "/",
	},
	{
		id: 2,
		value: "Photography",
		href: "/photography",
	},
	{
		id: 3,
		value: "Projects",
		href: "/projects",
	},
	{
		id: 4,
		value: "Blog",
		href: "/blog",
	},
];
