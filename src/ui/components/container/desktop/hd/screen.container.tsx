import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ScreenContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-2xl mx-auto hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
