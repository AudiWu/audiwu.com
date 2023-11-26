const expandAnimationStart: gsap.TweenVars = {
	height: 0,
	display: "hidden",
	opacity: 0,
	ease: "power1.inOut",
	duration: 0.5,
};

const expandAnimationEnd: gsap.TweenVars = {
	height: "100vh",
	display: "initial",
	opacity: 1,
	ease: "power1.inOut",
	duration: 0.5,
};

const Navbar = {
	expandAnimationStart,
	expandAnimationEnd,
};

export default Navbar;
