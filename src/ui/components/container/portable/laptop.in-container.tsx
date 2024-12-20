import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const LaptopInContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full h-full mx-auto p-3 hidden tablet:hidden laptop:block screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
