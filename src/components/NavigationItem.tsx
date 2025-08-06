import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { NAV_ANIMATION } from "@/constant/animation/navigation";

import { useAnimationState } from "@/store/animation";

import { addAnimation } from "@/utils/animation";

gsap.registerPlugin(useGSAP);

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
    const { setIsPlay } = useAnimationState();

    useGSAP(
        () => {
            const animation = gsap.fromTo(
                ref.current,
                NAV_ANIMATION.NAV_ITEM.expandAnimationStart,
                {
                    ...NAV_ANIMATION.NAV_ITEM.expandAnimationEnd,
                    onComplete: () => {
                        if (isLastItem) setIsPlay(false);
                    },
                },
            );

            addAnimation(timeline, animation, index + 1);
        },
        { scope: ref },
    );

    return (
        <li className="w-fit px-8" ref={ref}>
            <div className="relative">
                <a className="text-4xl sm:text-6xl md:text-8xl hover:underline" href={href}>
                    {value}
                </a>
            </div>
        </li>
    );
};
