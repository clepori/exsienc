import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ScreenFreeContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-screen min-h-10 hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
