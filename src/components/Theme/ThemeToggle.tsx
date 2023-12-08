import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const getTheme = (): Theme => {
	const localStorageTheme = window.localStorage.getItem("theme");
	const theme = localStorageTheme ?? "light";

	if (localStorageTheme === null) {
		window.localStorage.setItem("theme", theme);
	}

	return theme as Theme;
};

export const ThemeToggle = () => {
	const [theme, setThemeState] = useState<Theme>();

	const themeIcon = {
		light: <Sun />,
		dark: <Moon />,
	};

	const changeTheme = (theme: Theme) => {
		setThemeState(theme);
		window.localStorage.setItem("theme", theme);
	};

	useEffect(() => {
		setThemeState(getTheme());
	}, []);

	useEffect(() => {
		const isDark = theme === "dark";

		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{themeIcon[theme as Theme]}
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => changeTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeTheme("dark")}>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
