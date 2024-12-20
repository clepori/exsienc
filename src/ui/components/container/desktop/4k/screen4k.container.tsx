import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Screen4KContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-2xl mx-auto hidden tablet:hidden laptop:hidden screen:hidden screen-4k:block"
			)}
		>
			{children}
		</div>
	);
};
