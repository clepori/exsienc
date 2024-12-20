import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Screen4KInContainer = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-screen h-full px-40 p-5 hidden tablet:hidden laptop:hidden screen:hidden screen-4k:block"
			)}
		>
			{children}
		</div>
	);
};
