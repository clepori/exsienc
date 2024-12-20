import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ScreenInContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-screen h-full px-20 p-3 hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
