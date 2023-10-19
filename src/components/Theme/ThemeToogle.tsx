import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

const getTheme = () => {
	const localStorageTheme = window.localStorage.getItem("theme");
	const theme = localStorageTheme ?? "light";

	if (localStorageTheme === null) {
		window.localStorage.setItem("theme", theme);
	}

	return theme;
};

export const ThemeToggle = () => {
	const [theme, setThemeState] = useState<string>();

	const themeIcon = {
		light: <Sun />,
		dark: <Moon />,
		system: <Laptop />,
	};

	const changeTheme = (theme: Theme) => {
		setThemeState(theme);
		window.localStorage.setItem("theme", theme);
	};

	useEffect(() => {
		setThemeState(getTheme());
	}, []);

	useEffect(() => {
		const isSystemThemeDark =
			theme === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		const isDark = theme === "dark" || isSystemThemeDark;

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
				<DropdownMenuItem onClick={() => changeTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
