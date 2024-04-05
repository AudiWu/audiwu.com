import { NavAnimation } from "@/constant/animation/navigation";
import { useAnimationState } from "@/store/animation";
import { addAnimation } from "@/utils/animation/addAnimationToTimeline";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type NavigationItemProps = {
	value: string;
	index: number;
	href: string;
	isLastItem: boolean;
	timeline: gsap.core.Timeline;
};

export const NavigationItem = ({
	value,
	index,
	href,
	isLastItem,
	timeline,
}: NavigationItemProps) => {
	const ref = useRef<HTMLLIElement>(null);
	const underlineRef = useRef<HTMLSpanElement>(null);
	const { setIsPlay } = useAnimationState();
	const underlineTimeline = gsap.timeline({ paused: true });

	const onEnter = () => {
		underlineTimeline.tweenFromTo(0, "midway");
	};

	const onLeave = () => {
		underlineTimeline.play();
	};

	useEffect(() => {
		const animation = gsap.fromTo(
			ref.current,
			NavAnimation.NavItem.expandAnimationStart,
			{
				...NavAnimation.NavItem.expandAnimationEnd,
				onComplete: () => {
					if (isLastItem) setIsPlay(false);
				},
			},
		);

		addAnimation(timeline, animation, index + 1);

		underlineTimeline.fromTo(
			underlineRef.current,
			NavAnimation.NavItem.hoverUnderlineAnimationStartFrom,
			NavAnimation.NavItem.hoverUnderlineAnimationStartTo,
		);
		underlineTimeline.add("midway");
		underlineTimeline.fromTo(
			underlineRef.current,
			NavAnimation.NavItem.hoverUnderlineAnimationEndFrom,
			NavAnimation.NavItem.hoverUnderlineAnimationEndTo,
		);
	}, [timeline, underlineTimeline, index, isLastItem, setIsPlay]); // TODO: check biomejs for react useEffect rules

	return (
		<li className="w-fit px-8" ref={ref}>
			<div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
				<a className="text-4xl sm:text-6xl md:text-8xl" href={href}>
					{value}
				</a>
				<span
					className="hidden lg:block w-0 h-1 left-0 bottom-[-12px] absolute bg-primary"
					ref={underlineRef}
				/>
			</div>
		</li>
	);
};
