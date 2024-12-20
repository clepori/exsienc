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
				"w-[90vw] 5xl:w-[70vw] min-h-[10vh] mx-[5vw] 5xl:mx-[15vw] my-[10vh] laptop:my-[15vh] overflow-hidden"
				// hidden tablet:hidden laptop:hidden screen:block screen-4k:hidden
			)}
		>
			{children}
		</div>
	);
};
