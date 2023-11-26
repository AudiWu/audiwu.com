import { create } from "zustand";

type AnimationState = {
	isPlay: boolean;
	setIsPlay: (value: boolean) => void;
};

export const useAnimationState = create<AnimationState>((set) => ({
	isPlay: false,
	setIsPlay: (value) => set(() => ({ isPlay: value })),
}));
