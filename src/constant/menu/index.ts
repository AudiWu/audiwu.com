type NavItem = {
	id: number;
	value: string;
	href: string;
};

export const NAV_ITEMS: NavItem[] = [
	{
		id: 1,
		value: "About",
		href: "/",
	},
	{
		id: 2,
		value: "Blog",
		href: "/blog",
	},
];
