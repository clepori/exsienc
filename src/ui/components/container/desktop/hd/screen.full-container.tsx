import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ScreenFullContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full min-h-screen overflow-hidden hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
