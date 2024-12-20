import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Screen4KFreeContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-screen min-h-40 hidden tablet:hidden laptop:hidden screen:hidden screen-4k:block"
			)}
		>
			{children}
		</div>
	);
};
