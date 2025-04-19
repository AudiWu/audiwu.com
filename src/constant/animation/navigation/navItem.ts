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

const hoverUnderlineAnimationStartFrom: gsap.TweenVars = {
	width: "0%",
	left: "0%",
};

const hoverUnderlineAnimationStartTo: gsap.TweenVars = {
	width: "100%",
	duration: 1,
};

const hoverUnderlineAnimationEndFrom: gsap.TweenVars = {
	width: "100%",
	left: "0%",
};

const hoverUnderlineAnimationEndTo: gsap.TweenVars = {
	width: "0%",
	left: "100%",
	duration: 1,
	immediateRender: false,
};

export const NAV_ITEM = {
	expandAnimationStart,
	expandAnimationEnd,
	hoverUnderlineAnimationStartFrom,
	hoverUnderlineAnimationStartTo,
	hoverUnderlineAnimationEndFrom,
	hoverUnderlineAnimationEndTo,
};

