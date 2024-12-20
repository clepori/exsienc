import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TabletFullContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full min-h-screen overflow-hidden hidden tablet:block laptop:hidden screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
