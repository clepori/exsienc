import clsx from "clsx";

interface Props {
	variant?:
		| "t1"
		| "t2"
		| "t3"
		| "d1"
		| "d2"
		| "d3"
		| "d4"
		| "d5"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "b1"
		| "b2"
		| "b3"
		| "b4"
		| "b5"
		| "c1"
		| "c2"
		| "c3"
		| "c4"
		| "c5";
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
	theme?: "primary" | "secondary" | "gray" | "white";
	weigth?: "light" | "regular" | "medium" | "semibold" | "bold";
	className?: string;
	children: React.ReactNode;
}

export const Typography = ({
	variant = "b3",
	component: Component = "div",
	theme = "gray",
	weigth = "regular",
	className,
	children,
}: Props) => {
	let variantStyles: string = "",
		colorsStyles: string = "",
		weightStyles: string = "";

	switch (variant) {
		case "t1":
			variantStyles = "text-t1";
			break;
		case "t2":
			variantStyles = "text-t2";
			break;
		case "t3":
			variantStyles = "text-t3";
			break;
		case "d1":
			variantStyles = "text-d1";
			break;
		case "d2":
			variantStyles = "text-d2";
			break;
		case "d3":
			variantStyles = "text-d3";
			break;
		case "d4":
			variantStyles = "text-d4";
			break;
		case "d5":
			variantStyles = "text-d4";
			break;
		case "h1":
			variantStyles = "text-h1";
			break;
		case "h2":
			variantStyles = "text-h2";
			break;
		case "h3":
			variantStyles = "text-h3";
			break;
		case "h4":
			variantStyles = "text-h4";
			break;
		case "h5":
			variantStyles = "text-h5";
			break;
		case "b1":
			variantStyles = "text-b1";
			break;
		case "b2":
			variantStyles = "text-b2";
			break;
		case "b3":
			variantStyles = "text-b3"; //DEFAULT
			break;
		case "b4":
			variantStyles = "text-b4";
			break;
		case "b5":
			variantStyles = "text-b5";
			break;
		case "c1":
			variantStyles = "text-c1";
			break;
		case "c2":
			variantStyles = "text-c2";
			break;
		case "c3":
			variantStyles = "text-c3";
			break;
		case "c4":
			variantStyles = "text-c4";
			break;
		case "c5":
			variantStyles = "text-c5";
			break;
	}

	switch (theme) {
		case "primary":
			colorsStyles = "text-cyan";
			break;
		case "secondary":
			colorsStyles = "text-gray";
			break;
		case "gray": //DEFAULT
			colorsStyles = "text-gray-800";
			break;
		case "white":
			colorsStyles = "text-white";
			break;
	}

	switch (weigth) {
		case "regular":
			weightStyles = "font-regular";
			break;
		case "medium":
			weightStyles = "font-medium";
			break;
		case "semibold":
			weightStyles = "font-semibold";
			break;
		case "bold":
			weightStyles = "font-bold";
			break;
	}

	return (
		<Component
			className={clsx(
				variantStyles,
				colorsStyles,
				weightStyles,
				className
			)}
		>
			{children}
		</Component>
	);
};
