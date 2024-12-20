import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ContainerIn = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-[100vw] min-h-full overflow-hidden p-3 tablet:hidden laptop:hidden screen:hidden screen-4k:hidden"
			)}
		>
			{children}
		</div>
	);
};
