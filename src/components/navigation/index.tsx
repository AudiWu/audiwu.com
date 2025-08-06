import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

import { NAV_ANIMATION } from "@/constant/animation/navigation";
import { NAV_ITEMS } from "@/constant/menu";

import { useAnimationState } from "@/store/animation";

import { addAnimation } from "@/utils/animation";

import { NavigationItem } from "@/components/navigationItem";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button.tsx";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [timeline, _] = useState(gsap.timeline({ paused: true, delay: 0.3 }));
	const { isPlay, setIsPlay } = useAnimationState();
	const menuRef = useRef<HTMLDivElement>(null);

	const onClick = () => {
		setIsOpen(!isOpen);

		addAnimation(
			timeline,
			gsap.fromTo(
				menuRef.current,
				{
					...NAV_ANIMATION.NAVBAR.expandAnimationStart,
					onComplete: () => {
						setIsPlay(true);
						document.body.style.overflow = "hidden";
					},
				},
				{
					...NAV_ANIMATION.NAVBAR.expandAnimationEnd,
					onReverseComplete: () => {
						setIsPlay(false);
						document.body.style.overflow = "scroll";
					},
				},
			),
			0,
		);

		if (!isOpen) {
			timeline.play();
		} else {
			timeline.reverse(0);
		}
	};

	return (
		<header className="w-full relative z-50">
			<nav className="flex flex-row justify-between p-8">
				<a className="flex justify-center items-center text-xl font-bold sm:text-3xl" href="/">
					AUDI P.M.
				</a>
				<div className="flex flex-row justify-center items-center gap-2">
					<ThemeToggle />
					<Button
						variant="outline"
						size="icon"
						onClick={onClick}
						disabled={isPlay}
					>
						{isOpen ? <X /> : <Menu />}
					</Button>
				</div>
			</nav>
			<nav
				ref={menuRef}
				className="hidden w-full absolute top-[104px] z-50 bg-primary-foreground"
			>
				<ul className="flex flex-col gap-10 justify-center self-center">
					{NAV_ITEMS.map((item, index) => (
						<NavigationItem
							key={item.id}
							index={index}
							href={item.href}
							value={item.value}
							timeline={timeline}
							isLastItem={index === NAV_ITEMS.length - 1}
						/>
					))}
				</ul>
			</nav>
		</header>
	);
};