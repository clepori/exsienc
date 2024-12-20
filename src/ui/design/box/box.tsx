import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
	padding_x?: string;
	padding_y?: string;
}

export const Box = ({
	children,
	className,
	padding_x = "px-6",
	padding_y = "py-6",
}: Props) => {
	return (
		<div
			className={clsx(
				"w-full border border-secondary-200 bg-white rounded",
				padding_x,
				padding_y,
				className
			)}
		>
			{children}
		</div>
	);
};
