const expandAnimationStart: gsap.TweenVars = {
	opacity: 0,
	x: -100,
	ease: "power1.inOut",
	duration: 0.3,
};

const expandAnimationEnd: gsap.TweenVars = {
	opacity: 1,
	x: 0,
	ease: "power1.inOut",
	duration: 0.3,
};

export const NAV_ITEM = {
	expandAnimationStart,
	expandAnimationEnd,
};

