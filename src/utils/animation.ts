export const addAnimation = (
	timeline: gsap.core.Timeline,
	animation: gsap.core.TimelineChild,
	position?: gsap.Position | undefined,
) => {
	timeline.add(animation, position);
};