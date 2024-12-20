import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const PhoneContainer = ({ children, className }: Props) => {
	return (
		<div className="grid grid-cols-1 px-80 w-full max-2xlh-full">
			<div className="col-span-1">
				<div className={clsx(className, "")}>
					{children}
				</div>
			</div>
		</div>
	);
};
