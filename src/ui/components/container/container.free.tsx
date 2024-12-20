import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const ContainerFree = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				className,
				"w-full max-w-[100vw] min-h-[10vh] max-h-screen overflow-hidden"
				// hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden
			)}
		>
			{children}
		</div>
	);
};
