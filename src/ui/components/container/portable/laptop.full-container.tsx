import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const LaptopFullContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full min-h-screen overflow-hidden hidden tablet:hidden laptop:block screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
