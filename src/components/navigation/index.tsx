import { NAV_ANIMATION } from "@/constant/animation/navigation";
import { navItems } from "@/constant/menu";
import { useAnimationState } from "@/store/animation";
import { addAnimation } from "@/utils/animation/addAnimationToTimeline";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { NavigationItem } from "../navigationItem/index.tsx";
import { ThemeToggle } from "../theme/ThemeToggle.tsx";
import { Button } from "../ui/button.tsx";

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
		<div className="w-full relative z-50">
			<nav className="flex flex-row justify-between p-8">
				<h1 className="flex justify-center items-center text-xl font-bold sm:text-3xl">
					AUDI P.M.
				</h1>
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
			<div
				ref={menuRef}
				className="hidden w-full absolute top-[104px] z-50 bg-primary-foreground"
			>
				<ul className="flex flex-col gap-10 justify-center self-center">
					{navItems.map((item, index) => (
						<NavigationItem
							key={item.id}
							index={index}
							href={item.href}
							value={item.value}
							timeline={timeline}
							isLastItem={index === navItems.length - 1}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};