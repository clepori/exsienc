import { IconProps } from "@/types/iconprops";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
	variant?: "primary" | "secondary" | "light" | "gray" | "disable" | "ico";
	size?:
		| "2xsmall"
		| "xsmall"
		| "small"
		| "medium"
		| "large"
		| "xlarge"
		| "2xlarge";
	icon?: IconProps;
	iconTheme?: "primary" | "secondary" | "light" | "gray" | "disable";
	iconPosition?: "left" | "right";
	disabled?: boolean;
	isLoading?: boolean;
	children?: React.ReactNode;
	baseUrl?: string;
	linkType?: LinkType;
	action?: Function;
	type?: "button" | "submit";
	fullwidth?: boolean;
}

export const Button = ({
	variant = "primary",
	size = "medium",
	icon,
	iconTheme = "primary",
	iconPosition = "right",
	disabled,
	isLoading,
	children,
	baseUrl,
	linkType = "internal",
	type = "button",
	fullwidth = false,
	action = () => {},
}: Props) => {
	let backgroundStyles: string = "",
		fontStyles: string = "",
		roundedStyles: string = "",
		sizeStyles: string = "",
		textStyles: string = "",
		icoSize: number = 0;

	switch (variant) {
		case "primary": //DEFAULT
			backgroundStyles = "bg-cyan hover:bg-cyan-500";
			fontStyles = "text-white font-regular";
			roundedStyles = "rounded-small";
			break;
		case "light":
			backgroundStyles = "bg-cyan-200 hover:bg-cyan-100";
			fontStyles = "text-cyan font-regular";
			roundedStyles = "rounded-small";
			break;
		case "secondary":
			backgroundStyles = "bg-gray-200 hover:bg-gray-100";
			fontStyles = "text-gray-700 font-regular";
			roundedStyles = "rounded-small";
			break;
		case "gray":
			backgroundStyles = "bg-gray-800 hover:bg-gray-700";
			fontStyles = "text-gray-100 font-regular";
			roundedStyles = "rounded-small";
			break;
		case "disable":
			backgroundStyles = "bg-gray-100 cursor-not-allowed";
			fontStyles = "text-gray-200 font-regular";
			roundedStyles = "rounded-small";
			break;
		case "ico":
			if (iconTheme === "primary") {
				//DEFAUT
				backgroundStyles = "bg-cyan hover:bg-cyan-500";
				fontStyles = "text-white font-regular";
				roundedStyles = "rounded-full";
			}
			if (iconTheme === "secondary") {
				backgroundStyles = "bg-gray-200 hover:bg-gray-100";
				fontStyles = "text-gray-700 font-regular";
				roundedStyles = "rounded-full";
			}
			if (iconTheme === "light") {
				backgroundStyles = "bg-cyan-200 hover:bg-cyan-100";
				fontStyles = "text-cyan font-regular";
				roundedStyles = "rounded-full";
			}
			if (iconTheme === "disable") {
				backgroundStyles = "bg-gray-100 cursor-not-allowed";
				fontStyles = "text-gray-200 font-regular";
				roundedStyles = "rounded-full";
			}
			if (iconTheme === "gray") {
				backgroundStyles = "bg-gray-800 hover:bg-gray-700";
				fontStyles = "text-gray-100 font-regular";
				roundedStyles = "rounded-full";
			}
			break;
	}

	switch (size) {
		case "2xsmall":
			textStyles = "text-c3";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[35px] h-[35px]"
					: "px-[18px] h-[35px]"
			}`;
			icoSize = 12;
			break;
		case "xsmall":
			textStyles = "text-c2";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[40px] h-[40px]"
					: "px-[21px] h-[40px]"
			}`;
			icoSize = 16;
			break;
		case "small":
			textStyles = "text-b5";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[45px] h-[45px]"
					: "px-[24px] h-[45px]"
			}`;
			icoSize = 18;
			break;
		case "medium": //DEFAULT
			textStyles = "text-b4";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[50px] h-[50px]"
					: "px-[28px] h-[50px]"
			}`;
			icoSize = 20;
			break;
		case "large":
			textStyles = "text-b3";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[55px] h-[55px]"
					: "px-[32px] h-[55px]"
			}`;
			icoSize = 22;
			break;
		case "xlarge":
			textStyles = "text-b1";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[65px] h-[65px]"
					: "px-[35px] h-[65px]"
			}`;
			icoSize = 24;
			break;
		case "2xlarge":
			textStyles = "text-h5";
			sizeStyles = `${
				variant === "ico"
					? "flex items-center justify-center w-[80px] h-[80px]"
					: "px-[40px] h-[80px]"
			}`;
			icoSize = 26;
			break;
	}

	const handleClick = () => {
		if (action) {
			action();
		}
	};

	const buttonContent = (
		<>
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center">
					{size === "xsmall" || size === "small" ? (
						variant === "primary" ||
						(variant === "ico" && iconTheme === "gray") ||
						(variant === "ico" && iconTheme === "primary") ? (
							<Spinner size="xsmall" variant="primary" />
						) : variant === "secondary" ||
						  variant === "disable" ||
						  (variant === "ico" &&
								iconTheme === "secondary") ||
						  (variant === "ico" &&
								iconTheme === "disable") ? (
							<Spinner size="xsmall" variant="black" />
						) : (
							<Spinner size="xsmall" />
						)
					) : variant === "primary" ||
					  (variant === "ico" && iconTheme === "gray") ||
					  (variant === "ico" && iconTheme === "primary") ? (
						<Spinner size="small" variant="primary" />
					) : variant === "secondary" ||
					  variant === "disable" ||
					  (variant === "ico" && iconTheme === "secondary") ||
					  (variant === "ico" && iconTheme === "disable") ? (
						<Spinner size="small" variant="black" />
					) : (
						<Spinner size="small" />
					)}
				</div>
			)}
			<div className={clsx(isLoading && "invisible")}>
				{icon && variant === "ico" ? (
					<icon.icon size={icoSize} />
				) : (
					<>
						<div
							className={clsx(
								icon && "flex items-center gap-2"
							)}
						>
							{icon && iconPosition === "left" && (
								<icon.icon size={icoSize} />
							)}
							{children}
							{icon && iconPosition === "right" && (
								<icon.icon size={icoSize} />
							)}
						</div>
					</>
				)}
			</div>
		</>
	);

	const buttonElement = (
		<>
			<button
				type={type}
				className={clsx(
					backgroundStyles,
					fontStyles,
					roundedStyles,
					textStyles,
					sizeStyles,
					icoSize,
					isLoading && "cursor-wait",
					fullwidth && "w-full",
					"relative animate"
				)}
				onClick={handleClick}
				disabled={disabled}
			>
				{buttonContent}
			</button>
		</>
	);

	if (baseUrl) {
		if (linkType === LinkTypes.EXTERNAL) {
			return (
				<a href={baseUrl} target="_blank">
					{buttonElement}
				</a>
			);
		} else {
			return <Link href={baseUrl}>{buttonElement}</Link>;
		}
	}
	return buttonElement;
};
