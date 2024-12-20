import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const TabletInContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-[100vw] min-h-full p-5 hidden tablet:block laptop:hidden screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
