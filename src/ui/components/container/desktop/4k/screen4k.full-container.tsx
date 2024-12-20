import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Screen4KFullContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full min-h-screen overflow-hidden hidden tablet:hidden laptop:hidden screen:hidden screen-4k:block"
			)}
		>
			{children}
		</div>
	);
};
