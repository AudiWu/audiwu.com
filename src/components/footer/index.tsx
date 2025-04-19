export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="px-8 py-2 md:py-4 w-full flex justify-center text-center">
			All rights reserved © Audi P.M. {year}
		</footer>
	);
};
