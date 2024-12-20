import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TabletFreeContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-screen min-h-8 overflow-hidden hidden tablet:block laptop:hidden screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
