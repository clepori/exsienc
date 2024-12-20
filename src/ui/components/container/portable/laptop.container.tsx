import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const LaptopContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-2xl mx-auto hidden tablet:hidden laptop:block screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
